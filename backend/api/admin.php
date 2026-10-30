<?php
declare(strict_types=1);
require_once __DIR__ . '/../config/database.php';
configure_api();
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_set_cookie_params(['httponly'=>true, 'secure'=>!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off', 'samesite'=>'Strict', 'path'=>'/']);
    session_start();
}
function admin_out(array $data, int $status=200): never { json_response($data, $status); }
function require_admin(): void { if (empty($_SESSION['admin_id'])) admin_out(['success'=>false,'message'=>'Please sign in again.'],401); }
function require_csrf(): void { $sent=$_SERVER['HTTP_X_CSRF_TOKEN'] ?? ''; if (!$sent || empty($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'],$sent)) admin_out(['success'=>false,'message'=>'Security token expired. Refresh and try again.'],419); }
function body_json(): array { $v=json_decode(file_get_contents('php://input'),true); return is_array($v)?$v:[]; }
$method=$_SERVER['REQUEST_METHOD'] ?? 'GET';
$action=$_GET['action'] ?? '';
try {
 if ($method==='POST' && $action==='login') {
   $now=time(); if (!isset($_SESSION['login_attempts'])) $_SESSION['login_attempts']=[];
   $_SESSION['login_attempts']=array_values(array_filter($_SESSION['login_attempts'],fn($t)=>$t>$now-900));
   if (count($_SESSION['login_attempts'])>=8) admin_out(['success'=>false,'message'=>'Too many attempts. Wait 15 minutes and try again.'],429);
   $b=body_json(); $username=trim((string)($b['username']??'')); $password=(string)($b['password']??'');
   $q=db()->prepare('SELECT id,username,password_hash FROM admins WHERE username=? LIMIT 1'); $q->execute([$username]); $a=$q->fetch();
   if (!$a || !password_verify($password,$a['password_hash'])) { $_SESSION['login_attempts'][]=$now; admin_out(['success'=>false,'message'=>'Invalid username or password.'],401); }
   session_regenerate_id(true); $_SESSION['admin_id']=(int)$a['id']; $_SESSION['admin_username']=$a['username']; $_SESSION['csrf']=bin2hex(random_bytes(32)); $_SESSION['login_attempts']=[];
   db()->prepare('UPDATE admins SET last_login_at=NOW() WHERE id=?')->execute([$a['id']]);
   admin_out(['success'=>true,'username'=>$a['username'],'csrf'=>$_SESSION['csrf']]);
 }
 if ($method==='GET' && $action==='setup-status') { $n=(int)db()->query('SELECT COUNT(*) FROM admins')->fetchColumn(); admin_out(['success'=>true,'setup_required'=>$n===0]); }
 if ($method==='POST' && $action==='setup') {
   $b=body_json(); $n=(int)db()->query('SELECT COUNT(*) FROM admins')->fetchColumn();
   if ($n!==0) admin_out(['success'=>false,'message'=>'An admin account already exists.'],403);
   $u=trim((string)($b['username']??'')); $pw=(string)($b['password']??'');
   if (!preg_match('/^[A-Za-z0-9_.-]{4,80}$/',$u) || strlen($pw)<12) admin_out(['success'=>false,'message'=>'Use a username of 4+ characters and a password of at least 12 characters.'],422);
   $q=db()->prepare('INSERT INTO admins(username,password_hash) VALUES(?,?)'); $q->execute([$u,password_hash($pw,PASSWORD_DEFAULT)]);
   admin_out(['success'=>true,'message'=>'Admin created. You can now sign in.']);
 }
 if ($method==='POST' && $action==='logout') { require_admin(); require_csrf(); $_SESSION=[]; if (ini_get('session.use_cookies')) { $p=session_get_cookie_params(); setcookie(session_name(),'',time()-42000,$p['path'],$p['domain']??'',$p['secure'],$p['httponly']); } session_destroy(); admin_out(['success'=>true]); }
 if ($method==='GET' && $action==='me') { if (empty($_SESSION['admin_id'])) admin_out(['success'=>true,'authenticated'=>false]); admin_out(['success'=>true,'authenticated'=>true,'username'=>$_SESSION['admin_username'],'csrf'=>$_SESSION['csrf']]); }
 require_admin();
 if ($method==='GET' && $action==='stats') {
  $pdo=db(); $stats=['messages'=>(int)$pdo->query('SELECT COUNT(*) FROM contact_messages')->fetchColumn(),'projects'=>(int)$pdo->query('SELECT COUNT(*) FROM projects')->fetchColumn(),'published'=>(int)$pdo->query('SELECT COUNT(*) FROM projects WHERE published=1')->fetchColumn(),'views'=>(int)$pdo->query('SELECT COUNT(*) FROM page_views')->fetchColumn(),'views_today'=>(int)$pdo->query('SELECT COUNT(*) FROM page_views WHERE viewed_at >= CURDATE()')->fetchColumn()]; admin_out(['success'=>true,'data'=>$stats]);
 }
 if ($method==='GET' && $action==='messages') { $rows=db()->query('SELECT id,name,email,subject,message,created_at FROM contact_messages ORDER BY created_at DESC LIMIT 300')->fetchAll(); admin_out(['success'=>true,'data'=>$rows]); }
 if ($method==='POST' && $action==='delete-message') { require_csrf(); $id=(int)(body_json()['id']??0); db()->prepare('DELETE FROM contact_messages WHERE id=?')->execute([$id]); admin_out(['success'=>true]); }
 if ($method==='GET' && $action==='projects') { $rows=db()->query('SELECT id,slug,title,subtitle,category,description,cover_image,technologies_json,highlights_json,featured,published,sort_order FROM projects ORDER BY sort_order,id')->fetchAll(); foreach($rows as &$r){$r['technologies']=json_decode($r['technologies_json']?:'[]',true)?:[];$r['highlights']=json_decode($r['highlights_json']?:'[]',true)?:[];$r['featured']=(bool)$r['featured'];$r['published']=(bool)$r['published'];unset($r['technologies_json'],$r['highlights_json']);} unset($r); admin_out(['success'=>true,'data'=>$rows]); }
 if ($method==='POST' && $action==='save-project') {
  require_csrf(); $b=body_json(); $id=(int)($b['id']??0); $title=trim((string)($b['title']??'')); $slug=strtolower(trim((string)($b['slug']??''))); $slug=preg_replace('/[^a-z0-9-]+/','-', $slug); $slug=trim($slug,'-');
  if ($title==='' || $slug==='' || trim((string)($b['description']??''))==='') admin_out(['success'=>false,'message'=>'Title, slug and description are required.'],422);
  $vals=[$slug,$title,trim((string)($b['subtitle']??'')),trim((string)($b['category']??'')),trim((string)($b['description']??'')),trim((string)($b['cover_image']??'')),json_encode(array_values(array_filter($b['technologies']??[], 'is_string'))),json_encode(array_values(array_filter($b['highlights']??[], 'is_string'))),!empty($b['featured'])?1:0,!empty($b['published'])?1:0,(int)($b['sort_order']??0)];
  if ($id>0) { $vals[]=$id; $q=db()->prepare('UPDATE projects SET slug=?,title=?,subtitle=?,category=?,description=?,cover_image=?,technologies_json=?,highlights_json=?,featured=?,published=?,sort_order=? WHERE id=?'); $q->execute($vals); }
  else { $q=db()->prepare('INSERT INTO projects(slug,title,subtitle,category,description,cover_image,technologies_json,highlights_json,featured,published,sort_order) VALUES(?,?,?,?,?,?,?,?,?,?,?)'); $q->execute($vals); }
  admin_out(['success'=>true,'message'=>'Project saved.']);
 }
 if ($method==='POST' && $action==='delete-project') { require_csrf(); $id=(int)(body_json()['id']??0); db()->prepare('DELETE FROM projects WHERE id=?')->execute([$id]); admin_out(['success'=>true]); }
 admin_out(['success'=>false,'message'=>'Unknown action or method.'],404);
} catch (PDOException $e) { error_log('Portfolio admin DB error: '.$e->getMessage()); if ($e->getCode()==='23000') admin_out(['success'=>false,'message'=>'That project slug already exists. Choose a unique slug.'],409); admin_out(['success'=>false,'message'=>'A database error occurred. Check the database setup.'],500); }
catch (Throwable $e) { error_log('Portfolio admin error: '.$e->getMessage()); admin_out(['success'=>false,'message'=>'The request could not be completed.'],500); }

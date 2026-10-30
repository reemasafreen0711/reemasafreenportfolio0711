<?php
declare(strict_types=1);
require_once __DIR__ . '/../config/database.php';
configure_api();
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
$data = json_decode(file_get_contents('php://input'), true);
$page = is_array($data) ? trim((string)($data['page'] ?? '/')) : '/';
if ($page === '' || strlen($page) > 180 || !preg_match('#^/[a-zA-Z0-9/_-]*$#', $page)) $page = '/';
try {
    // Counts page visits without storing IP addresses, names, or full user-agent strings.
    $stmt = db()->prepare('INSERT INTO page_views (page_path) VALUES (:page)');
    $stmt->execute(['page' => $page]);
    json_response(['success' => true], 201);
} catch (Throwable $e) {
    error_log('Portfolio analytics API error: ' . $e->getMessage());
    json_response(['success' => false, 'message' => 'Analytics unavailable.'], 500);
}

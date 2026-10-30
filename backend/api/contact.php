<?php
declare(strict_types=1);
require_once __DIR__ . '/../config/database.php';
configure_api();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') === false) json_response(['success' => false, 'message' => 'JSON request required.'], 415);
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) json_response(['success' => false, 'message' => 'Invalid request body.'], 400);

// Quiet spam trap: real visitors leave this field empty.
if (!empty($data['website'])) json_response(['success' => true, 'message' => 'Thanks! Your message has been received.']);
$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
if ($name === '' || mb_strlen($name) > 100) json_response(['success' => false, 'message' => 'Please enter a name under 100 characters.'], 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 190) json_response(['success' => false, 'message' => 'Please enter a valid email address.'], 422);
if ($subject === '' || mb_strlen($subject) > 180) json_response(['success' => false, 'message' => 'Please enter a subject under 180 characters.'], 422);
if ($message === '' || mb_strlen($message) > 5000) json_response(['success' => false, 'message' => 'Please enter a message under 5,000 characters.'], 422);

try {
    $stmt = db()->prepare('INSERT INTO contact_messages (name, email, subject, message) VALUES (:name, :email, :subject, :message)');
    $stmt->execute(['name' => $name, 'email' => $email, 'subject' => $subject, 'message' => $message]);
    json_response(['success' => true, 'message' => 'Thanks! Your message has been saved. I will get back to you soon.'], 201);
} catch (Throwable $e) {
    error_log('Portfolio contact API error: ' . $e->getMessage());
    json_response(['success' => false, 'message' => 'We could not save your message right now. Please try again later.'], 500);
}

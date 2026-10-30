<?php
declare(strict_types=1);
require_once __DIR__ . '/../config/database.php';
configure_api();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
try {
    $rows = db()->query('SELECT id, slug, title, subtitle, category, description, cover_image, technologies_json, highlights_json, featured, sort_order FROM projects WHERE published = 1 ORDER BY sort_order, id')->fetchAll();
    foreach ($rows as &$row) {
        $row['technologies'] = json_decode($row['technologies_json'] ?: '[]', true) ?: [];
        $row['highlights'] = json_decode($row['highlights_json'] ?: '[]', true) ?: [];
        $row['featured'] = (bool)$row['featured'];
        unset($row['technologies_json'], $row['highlights_json']);
    }
    unset($row);
    json_response(['success' => true, 'data' => $rows]);
} catch (Throwable $e) {
    error_log('Portfolio projects API error: ' . $e->getMessage());
    json_response(['success' => false, 'message' => 'Projects are temporarily unavailable.'], 500);
}

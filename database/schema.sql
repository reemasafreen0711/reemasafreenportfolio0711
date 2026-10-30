CREATE DATABASE IF NOT EXISTS reema_portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE reema_portfolio;


CREATE TABLE IF NOT EXISTS admins (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(80) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(190) NOT NULL,
  subject VARCHAR(180) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_contact_created_at (created_at),
  INDEX idx_contact_email (email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS projects (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(120) NOT NULL UNIQUE,
  title VARCHAR(180) NOT NULL,
  subtitle VARCHAR(255) NOT NULL DEFAULT '',
  category VARCHAR(180) NOT NULL DEFAULT '',
  description TEXT NOT NULL,
  cover_image VARCHAR(255) NOT NULL DEFAULT '',
  technologies_json JSON NOT NULL,
  highlights_json JSON NOT NULL,
  featured TINYINT(1) NOT NULL DEFAULT 0,
  published TINYINT(1) NOT NULL DEFAULT 1,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS page_views (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  page_path VARCHAR(180) NOT NULL,
  viewed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_page_views_viewed_at (viewed_at),
  INDEX idx_page_views_path_date (page_path, viewed_at)
) ENGINE=InnoDB;

INSERT INTO projects (slug, title, subtitle, category, description, cover_image, technologies_json, highlights_json, featured, sort_order)
VALUES
('voice2sign', 'VOICE2SIGN', 'Intelligent Speech & Sign Language Translation System', 'AI • Computer Vision • Full-Stack', 'An accessibility-focused communication platform supporting Voice to Sign and Sign to Voice interaction.', '/v2s.jpg', JSON_ARRAY('React','FastAPI','Python','MediaPipe','MongoDB','REST API'), JSON_ARRAY('Voice to Sign translation','Sign to Voice recognition','Real-time hand tracking'), 1, 1),
('rilax-tiles', 'RILAX TILES', 'Premium Architectural Surfaces Experience', 'Frontend • UI/UX • Product Experience', 'A premium product-focused web experience for architectural surfaces.', '/Rilax Tiles.png', JSON_ARRAY('React','Vite','Tailwind CSS','Framer Motion'), JSON_ARRAY('Premium visual design','Responsive product experience','Smooth animations'), 0, 2),
('task-management', 'TASK MANAGEMENT SYSTEM', 'Role-Based Project & Task Management Platform', 'Full-Stack • REST API • Authentication', 'A full-stack task management platform with project management and status tracking.', '/Task Management.png', JSON_ARRAY('React','Laravel','MySQL','Sanctum','REST API'), JSON_ARRAY('Project management','Task tracking dashboard','Role-based access'), 0, 3),
('student-management', 'Student Management System', 'A centralized platform for student and academic administration.', 'Full Stack Development', 'An application designed to organize student records, departments and attendance.', '/student management.png', JSON_ARRAY('React','Laravel','PHP','MySQL','REST API'), JSON_ARRAY('Student records','Department management','Attendance tracking'), 1, 4)
ON DUPLICATE KEY UPDATE title = VALUES(title), subtitle = VALUES(subtitle), category = VALUES(category), description = VALUES(description), cover_image = VALUES(cover_image), technologies_json = VALUES(technologies_json), highlights_json = VALUES(highlights_json), featured = VALUES(featured), sort_order = VALUES(sort_order);

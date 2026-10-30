# Reema Safreen Portfolio — React + PHP + MySQL

This update keeps the existing React/Vite portfolio components, project case-study UI, visual styling, animations, and resume file. It adds a small PHP API for contact submissions, anonymous page-view counting, and reading published projects from MySQL.

## What's included

- **Contact form:** posts to PHP and stores validated messages in MySQL (instead of opening a `mailto:` link).
- **Database:** SQL schema for contact messages, projects, and anonymous page-view events.
- **Projects API:** `GET /projects.php` returns published database projects. The current React case-study UI still uses `src/data/projects.js` so its richer project details and layout remain unchanged.
- **Resume:** existing `public/Resume1.pdf` and download links are preserved.
- **Analytics:** counts page paths without saving IP addresses or full user-agent strings.
- **Design:** existing premium dark/violet design and animations are preserved.

## Important admin/login note

The request selected **no login**. Therefore, this starter intentionally does **not** expose an admin dashboard or public edit/delete endpoints. That would allow anyone to read private contact messages or modify projects. Contact messages are saved in the database and can be inspected locally through phpMyAdmin while developing. If you want a browser-based admin panel to manage messages/projects and view analytics, add a secure admin login first.

## Setup with XAMPP

1. Start **Apache** and **MySQL** in the XAMPP Control Panel.
2. Copy this project's `backend` folder to `C:\xampp\htdocs\portfolio\backend` (the API URL below expects this path).
3. Open `http://localhost/phpmyadmin`.
4. Select **Import**, choose `database/schema.sql`, and run the import. This creates the `reema_portfolio` database and starter project rows.
5. If your MySQL credentials differ from XAMPP defaults, update `backend/config/database.php` or set `PORTFOLIO_DB_HOST`, `PORTFOLIO_DB_NAME`, `PORTFOLIO_DB_USER`, and `PORTFOLIO_DB_PASS` in your PHP environment.
6. In the React project root, copy `.env.example` to `.env`. Confirm it contains:

   ```env
   VITE_API_BASE_URL=http://localhost/portfolio/backend/api
   ```

7. In a terminal opened at the React project folder, run:

   ```bash
   npm install
   npm run dev
   ```

   Use the local URL printed by Vite (usually `http://localhost:5173`). The PHP backend stays under XAMPP's `htdocs` folder.
8. Test the form. Then open phpMyAdmin → `reema_portfolio` → `contact_messages` to verify that the enquiry was saved. Page visits appear in `page_views`.

## API endpoints

- `POST /contact.php` — accepts JSON: `name`, `email`, `subject`, `message`.
- `GET /projects.php` — returns published project rows.
- `POST /track-visit.php` — records a page path only.

The local CORS allow-list currently includes Vite development origins on ports 5173 and 4173. Update `backend/config/database.php` before using a different development origin. Do not publish database credentials in frontend code.

## Troubleshooting

- **Failed to fetch:** make sure Apache is running, the backend folder is at the expected `htdocs/portfolio/backend` path, and `.env` has the matching API base URL. Restart Vite after changing `.env`.
- **Database connection error:** make sure MySQL is running and `database/schema.sql` was imported.
- **Build/dependency issue:** run `npm install` in the project folder to install dependencies for your own operating system. `node_modules` is intentionally not included in the project archive.

## Admin dashboard (XAMPP)

1. Start **Apache** and **MySQL** in XAMPP.
2. Copy this project's `backend` folder to `C:\xampp\htdocs\portfolio\backend` (the URL should be `http://localhost/portfolio/backend/api`).
3. Open `http://localhost/phpmyadmin`, select **Import**, and import `database/schema.sql`. If you already imported the schema earlier, import it again; the admin table is created with `CREATE TABLE IF NOT EXISTS`.
4. From the project folder run `npm install`, then `npm run dev`.
5. Open the Vite URL and visit `http://localhost:5173/admin`.
6. On first use, choose **First-time setup: create the first admin**. Use a username of at least 4 characters and a password of at least 12 characters. Then sign in.
7. The dashboard lets you review/delete contact messages, add/edit/delete projects, publish/unpublish projects, and see page-view counts.

### Security notes

- The first-admin setup endpoint only works while the `admins` table is empty. Once the first admin is created, it refuses further setup requests.
- The dashboard uses PHP sessions, password hashing, CSRF tokens for changes, and a short login-attempt throttle.
- Do not expose this development configuration directly to the public internet. For production, use HTTPS, a dedicated database user with limited permissions, and a proper deployment configuration.
- The public portfolio and contact form do not require login; only `/admin` does.

Project: Django portfolio (single-app)

Quick orientation
- App: `main` — contains models, views, forms, admin and templates.
- Templates: `main/templates/` (flat; not namespaced). Example: `projects.html` extends `base.html`.
- Model of interest: `main/models.py` -> `Project` (fields: `title`, `description`, `image`, `link`, `technologies`; property `tech_list`).
- Admin: `main/admin.py` registers `Project` and `ContactMessage`.

Why things are structured this way
- Small single-app portfolio: templates live at `main/templates/` (APP_DIRS=True). Views render templates by bare name (e.g. `render(request, 'projects.html', ...)`).
- Static assets live under `main/static/main/...` and are referenced with `{% static 'main/css/style.css' %}`.
- Uploaded images use `ImageField` stored under `MEDIA_ROOT/projects/`; templates use `project.image.url`.

Common problems to check first (concrete checks)
- "No projects" or missing content: confirm there are `Project` rows in DB. Quick check in project root:

```bash
python manage.py shell -c "from main.models import Project; print(Project.objects.count())"
```

- If zero, add via admin (`python manage.py createsuperuser` then `http://127.0.0.1:8000/admin`) or via fixtures / Django shell.
- Images not visible: ensure `MEDIA_URL`/`MEDIA_ROOT` are set in `portfolio/settings.py` and that `portfolio/urls.py` includes `static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)` when `DEBUG` is True (this project already does).
- Static CSS/JS not loading: confirm `STATICFILES_DIRS = [ BASE_DIR / "main/static" ]` and that templates reference paths under `main/` (they do).

Routing and templates
- Routes are declared in `main/urls.py` and included from `portfolio/urls.py` (root include). Key names: `home`, `about`, `projects`, `contact`.
- `projects` view in `main/views.py` returns `{'projects': Project.objects.all()}` and renders `projects.html`. The template expects `projects` in context.

Developer workflow (commands you will use frequently)
- Run migrations and dev server:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

- Create a superuser and add projects in admin:

```bash
python manage.py createsuperuser
# then visit http://127.0.0.1:8000/admin
```

- Inspect objects quickly:

```bash
python manage.py shell
>>> from main.models import Project
>>> Project.objects.all()
```

Project-specific conventions
- Templates are not namespaced (e.g. `projects.html` is at `main/templates/projects.html`), so code calls `render(..., 'projects.html', ...)` directly.
- Technology list stored as comma-separated string `technologies` on `Project`; use `project.tech_list` in templates (property defined in model).
- Images use `project.image.url` and templates guard with `{% if project.image %}`.

Integration & Ops notes
- DB: SQLite at `db.sqlite3` by default (BASE_DIR / 'db.sqlite3').
- Mail: `settings.py` configures SMTP credentials; secrets are currently in the repo — avoid committing credentials in production.
- Static + Media: In `DEBUG=True` the project relies on `django.conf.urls.static.static` to serve both static and media. For production use `collectstatic` + a static server.

How to quickly triage "content not rendering"
1. Confirm view is executed: add a temporary debug line in `main/views.py` (or check runserver logs) to ensure the `projects` view runs.
2. Confirm DB rows: run the `shell` check above.
3. Confirm template receives context: in `projects.html` temporarily add `{{ projects|length }}` at top to see how many items template sees.
4. Confirm templates found: app uses `APP_DIRS=True`. If templates not found, check for typos in filenames.
5. Confirm static/media URLs: visit `http://127.0.0.1:8000/media/` or view image URL to see if served.

If you'd like, I can:
- run the above checks and add a temporary diagnostics snippet to `projects.html` or `views.py`,
- or create a quick management command to list Projects and their image paths.

Files to inspect for debugging: `main/views.py`, `main/templates/projects.html`, `main/models.py`, `portfolio/settings.py`, `portfolio/urls.py`, `main/admin.py`.

Please tell me which one you'd like me to adjust or run diagnostics for next.

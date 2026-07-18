# Simple Task API

A minimal backend API built with **Node.js + Express** that demonstrates the core backend concepts: routing, GET/POST endpoints, reading user input, and validation.

## What it does

A "Task Manager" API. You can list tasks, fetch one, create one, update one, or delete one — all over HTTP, using JSON.

## How to run it

1. **Install Node.js** if you don't have it (v18+ recommended): https://nodejs.org
2. **Install dependencies** (just Express):
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
   You should see:
   ```
   Server running at http://localhost:3000
   ```
4. **Try it** — open a new terminal and use `curl`, or open `http://localhost:3000` in a browser for GET requests.

To auto-restart on file changes while developing, use `npm run dev` instead.

## Endpoints

| Method | Path         | Purpose                                  |
|--------|--------------|-------------------------------------------|
| GET    | `/`          | Health check + list of endpoints          |
| GET    | `/tasks`     | List all tasks (`?completed=true` filter) |
| GET    | `/tasks/:id` | Get one task by id                        |
| POST   | `/tasks`     | Create a task                             |
| PUT    | `/tasks/:id` | Update a task                             |
| DELETE | `/tasks/:id` | Delete a task                             |

### Example requests

```bash
# List all tasks
curl http://localhost:3000/tasks

# List only completed tasks
curl "http://localhost:3000/tasks?completed=true"

# Get a single task
curl http://localhost:3000/tasks/1

# Create a task
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy milk"}'

# Update a task
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete a task
curl -X DELETE http://localhost:3000/tasks/1
```

## How it works (the concepts)

**1. Express sets up routes.**
Each `app.get(...)`, `app.post(...)`, etc. maps an HTTP method + URL pattern to a handler function. Express matches the incoming request to the right handler and calls it with `(req, res)`.

**2. Reading user input — three ways:**
- **Route params** (`req.params.id`) — the `:id` in `/tasks/:id` captures part of the URL, e.g. `5` in `/tasks/5`.
- **Query params** (`req.query.completed`) — the part after `?` in a URL, e.g. `?completed=true`.
- **Request body** (`req.body`) — JSON sent by the client in a POST/PUT. The `express.json()` middleware (registered near the top of `server.js`) automatically parses this into a JS object.

**3. Validation.**
`validateTaskInput()` checks the incoming data before it's trusted: is `title` present, a string, non-empty, and a reasonable length? Is `completed` (if given) actually a boolean? If anything fails, the API responds with `400 Bad Request` and a list of specific error messages — it never lets bad data reach the "database."

**4. Responses use proper HTTP status codes**, which is a core REST convention:
- `200 OK` — successful GET/PUT/DELETE
- `201 Created` — successful POST (a new resource now exists)
- `400 Bad Request` — the client sent invalid data
- `404 Not Found` — no resource matches that id/route
- `500 Internal Server Error` — something broke unexpectedly on the server

**5. Storage is in-memory** (a plain JS array, `tasks`). This keeps the example focused on API mechanics. Restarting the server resets the data. Swapping this for a real database (e.g. PostgreSQL, MongoDB, SQLite) later would only require changing the functions inside each route handler — the routes, validation, and response shapes stay the same.

**6. Middleware** runs before your route handlers on every request. Here it's used for two things: parsing JSON bodies (`express.json()`) and logging each request to the console, which is handy while debugging.

## Extending this

- Swap the in-memory array for a real database.
- Add authentication (e.g. check an `Authorization` header before allowing POST/PUT/DELETE).
- Add pagination to `GET /tasks` for large datasets.
- Deploy it (e.g. Render, Railway, Fly.io, or a VPS) by running `npm start` behind a process manager like `pm2`.

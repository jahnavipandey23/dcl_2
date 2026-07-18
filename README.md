# Decode Lab 2 — Backend API

A simple backend API built with **Node.js** and **Express** to handle basic application logic: creating and retrieving users.

## Project: Backend API Development

**Goal:** Develop a simple backend API to handle application logic.

**Key Requirements Covered:**
- API endpoints (GET / POST)
- Handling user input and responses
- Basic data validation

## Tech Stack

- Node.js
- Express

## Project Structure

```
DECODE LAB2/
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the server
```bash
node server.js
```

The server will start on:
```
http://localhost:3000
```

You should see `app is running` logged in the console.

## API Endpoints

### `GET /`
Returns a welcome message to confirm the API is running.

**Response:**
```
welcome to my api
```

---

### `GET /users`
Returns the full list of users currently stored in memory.

**Response `200 OK`:**
```json
[
  { "name": "John" },
  { "name": "Sara" }
]
```

---

### `POST /user`
Creates a new user. Requires a `name` field in the request body.

**Request Body:**
```json
{
  "name": "John"
}
```

**Success Response `201 Created`:**
```json
{
  "message": "data received",
  "users": [
    { "name": "John" }
  ]
}
```

**Validation Error Response `400 Bad Request`**  
Returned when `name` is missing from the request body.
```json
{
  "message": "Name is Required"
}
```

## Notes

- Data is stored **in memory** (in a `users` array). This means all data resets whenever the server restarts — there is no database connected yet.
- This project focuses on demonstrating core backend concepts: routing, request handling, JSON responses, and basic input validation.

## Author

Built as part of the Decode Lab backend development task.

# Simple User API

A simple backend API built using **Node.js** and **Express.js**.

## Features

- GET endpoint
- POST endpoint
- JSON request handling
- Basic input validation
- In-memory data storage

## Installation

1. Install dependencies

```bash
npm install
```

2. Start the server

```bash
node server.js
```

The server will run on:

```
http://localhost:3000
```

---

## API Endpoints

### GET /

Returns a welcome message.

Response:

```text
Welcome to my API
```

---

### GET /users

Returns all users.

Example:

```json
[
  {
    "name": "Jahnavi"
  }
]
```

---

### POST /user

Adds a new user.

Request Body

```json
{
  "name": "Jahnavi"
}
```

Success Response

```json
{
  "message": "User added successfully",
  "users": [
    {
      "name": "Jahnavi"
    }
  ]
}
```

Validation

If the name is missing:

```json
{
  "message": "Name is required"
}
```

Status Code:

- 201 Created
- 400 Bad Request

---

## Technologies Used

- Node.js
- Express.js

---

## Author

Jahnavi Pandey

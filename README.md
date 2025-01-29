# Public API - HNGi12 Backend - Stage 0 Task

## Description
This is a simple Node.js and Express API that returns basic information in json format, including an email, the current date/time, and a GitHub URL. The API also includes error handling and supports CORS.

## Features
- Returns JSON data with email, timestamp, and GitHub link.
- Supports CORS for cross-origin requests.
- Handles errors gracefully.

## Setup Instructions

### Prerequisites
Ensure you have **Node.js** installed on your machine.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Fave7903/hngi12-backend.git
   cd hngi12-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js  # or use nodemon for auto-reloading: nodemon index.js
   ```

The server should start on **http://localhost:3000** (or another port if specified in the environment variables).

---

## API Documentation

### **GET /**
#### Endpoint URL:
```
https://hngi12-backend.onrender.com
```

#### Response Format:
- **Success (200 OK)**
```json
{
  "email": "femisolomon15@gmail.com",
  "current_datetime": "2025-01-29T12:00:00.000Z",
  "github_url": "https://github.com/Fave7903/hngi12-backend"
}
```

- **Error (500 Internal Server Error)**
```json
{
  "err": "An error occurred"
}
```

#### Example Usage
```sh
curl -X GET https://hngi12-backend.onrender.com
```

---

## Backlink for Node.js

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

### Author
[Favour Solomon (Soar)](https://github.com/Fave7903)


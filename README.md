
# 📮 Ticketing System – Backend API (Express.js + MVC)

A simple internal issue-tracking system that allows users to raise support tickets, view them, update them, delete them, and resolve them after proper validation. Built using **Node.js**, **Express.js**, and structured with the **MVC architecture**.

---

## 📁 Project Structure

```
├── controllers/
│   └── ticket.controller.js
├── middlewares/
│   └── dataCheckMiddleware.js
├── models/
│   └── ticket.model.js
├── routes/
│   └── ticket.routes.js
├── db.json
├── app.js (or server.js)
└── package.json
```

---

## 🧠 Features

| Feature                        | Description                                               |
|-------------------------------|-----------------------------------------------------------|
| Create a ticket               | User can raise a ticket with necessary fields             |
| View all tickets              | Retrieve all tickets from `db.json`                       |
| View ticket by ID             | Retrieve single ticket using `ticket_id`                  |
| Update a ticket               | Modify `title`, `description`, or `priority`              |
| Delete a ticket               | Permanently remove a ticket by ID                         |
| Resolve a ticket              | Change status from `pending` → `resolved`                 |
| Middleware for validation     | Ensures ticket fields are present when creating tickets   |
| 404 route handler             | Handles unknown routes                                    |
| Modular MVC Code              | Clean separation of concerns                              |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/ticketing-system.git
cd ticketing-system
npm install
```

---

## 🚀 Run the App

```bash
node app.js
# or use nodemon if installed
nodemon app.js
```

App will run at: `http://localhost:3000`

---

## 🔌 API Endpoints

### ✅ Create a Ticket

```http
POST /tickets
```
**Body:**
```json
{
  "title": "Login issue",
  "description": "Unable to log in",
  "priority": "high",
  "user": "John Doe"
}
```

### 📥 Get All Tickets

```http
GET /tickets
```

### 🔍 Get Ticket by ID

```http
GET /tickets/:id
```

### ✏️ Update Ticket

```http
PUT /tickets/:id
```
**Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "priority": "low"
}
```

### ❌ Delete Ticket

```http
DELETE /tickets/:id
```

### ✔️ Resolve a Ticket

```http
PATCH /tickets/:id/resolve
```

---

## 🚫 Error Handling

| Error                          | Message                                                     |
|-------------------------------|-------------------------------------------------------------|
| Missing fields in POST        | `{ "error": "Data insufficient, please provide all required fields" }` |
| Invalid route                 | `{ "error": "404 Not Found" }`                             |
| Invalid ticket ID             | `{ "error": "Ticket not found" }`                          |

---

## 📋 Middleware

### `dataCheckMiddleware.js`
Ensures all tickets must contain:  
- `title`
- `description`
- `priority`
- `user`

---

## 📚 Technologies Used

- Node.js
- Express.js
- JSON-based `db.json` as mock database
- MVC architecture
- Middleware

---

## 👨‍💻 Author

Made with ❤️ by **student-developer Vikram**  
GitHub: [@your-username](https://github.com/your-username)

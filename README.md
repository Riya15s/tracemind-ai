<div align="center">

# 🚀 TraceMind AI

### AI-Powered Incident Management Dashboard

Manage, track, and analyze incidents with AI-generated insights.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Frontend-Netlify-00C7B7?logo=netlify)](https://tracemind-ai.netlify.app)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)](https://tracemind-ai.onrender.com)

### 🌐 Live Demo

**Frontend:** https://tracemind-ai.netlify.app

**Backend API:** https://tracemind-ai.onrender.com/api/incidents

</div>

---

# 📌 Overview

TraceMind AI is a full-stack MERN application that helps teams monitor and manage incidents efficiently.

Users can:

- Create incidents
- Update incidents
- Delete incidents
- Search incidents
- Filter by status
- Filter by severity
- View dashboard statistics
- Generate AI-powered incident analysis

---

# ✨ Features

✅ Create Incident

✅ Edit Incident

✅ Delete Incident

✅ Search Incidents

✅ Filter by Severity

✅ Filter by Status

✅ Dashboard Statistics

✅ AI Incident Analysis

✅ Responsive UI

✅ Toast Notifications

✅ Loading Spinner

✅ REST API

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Deployment

- Netlify
- Render

---

# 📂 Project Structure

```
TraceMind-AI
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── server
    ├── config
    ├── controllers
    ├── models
    ├── routes
    ├── app.js
    ├── server.js
    └── package.json
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Riya15s/tracemind-ai.git
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

For production:

```env
VITE_API_URL=https://tracemind-ai.onrender.com/api
```

---

# 📷 Screenshots

Add screenshots here after taking them.

Example:

- Dashboard
- Create Incident
- AI Analysis
- Search & Filters

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/incidents | Get all incidents |
| GET | /api/incidents/:id | Get incident by ID |
| POST | /api/incidents | Create incident |
| PUT | /api/incidents/:id | Update incident |
| DELETE | /api/incidents/:id | Delete incident |
| GET | /api/incidents/:id/analyze | AI analysis |

---

# 🎯 Future Improvements

- Authentication (JWT)
- User Roles
- File Uploads
- Real AI Integration (OpenAI/Gemini)
- Charts & Analytics
- Email Notifications
- Incident History
- Dark/Light Theme

---

# 👩‍💻 Author

**Riya Jagriti**

GitHub:
https://github.com/Riya15s

LinkedIn:
(Add your LinkedIn profile)

---

## ⭐ Support

If you like this project,

⭐ Star the repository

🍴 Fork the repository

💡 Contributions are welcome!

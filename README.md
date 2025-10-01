MERN Stack Application - Admin & Agent List Distribution
Overview

This application is built using the MERN stack and provides functionality for an Admin user to log in, create and manage Agents, upload CSV/XLSX files, and distribute list items equally among agents.

Features
1. Admin User Login

Admin login with Email and Password

Authentication using JSON Web Tokens (JWT)

Redirects to dashboard on successful login

Error messages shown on failure

2. Agent Management

Add new agents

View, update, and delete agents

Agent details include:

Name

Email

Mobile Number (with country code)

Password

3. Upload and Distribute Lists

Upload files in CSV, XLSX, or AXLS format

Accepted fields in file:

FirstName (Text)

Phone (Number)

Notes (Text)

File validation for format and data integrity

Distributes uploaded items equally among 5 agents

Remaining items (if not divisible by 5) distributed sequentially

Distributed lists stored in MongoDB

Lists displayed for each agent on the frontend

Technical Stack

Frontend: React.js / Next.js

Backend: Node.js with Express.js

Database: MongoDB

Authentication: JSON Web Tokens (JWT)

File Handling: Multer, CSV parser, XLSX

Project Structure
project/
│
├── backend/
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Application logic
│   ├── middleware/      # Authentication and error handling
│   └── server.js        # Entry point
│
├── frontend/
│   ├── src/components/  # UI components
│   ├── src/pages/       # Pages (Login, Dashboard, Agents, Upload)
│   ├── src/services/    # API services
│   └── src/App.js       # Application entry
│
└── README.md

Environment Variables

Create a .env file in both backend and frontend with required configurations:

Backend

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Frontend

REACT_APP_API_URL=http://localhost:5000

Setup and Execution

Clone the repository and navigate to the project folder

Install backend dependencies

cd backend
npm install


Start backend server

npm start


Install frontend dependencies

cd frontend
npm install


Start frontend server

npm start

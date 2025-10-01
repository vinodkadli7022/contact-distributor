MERN Stack Application - Admin & Agent List Distribution

This is a basic MERN stack application that allows an Admin to log in, create and manage Agents, and upload CSV/XLSX files to distribute tasks/lists equally among agents.

🚀 Features
1. Admin User Login

Admin can log in using Email & Password.

Authentication with JWT (JSON Web Token).

Redirects to Dashboard on success.

Error messages shown on failure.

2. Agent Management

Add, View, Edit, and Delete agents.

Each agent has the following details:

Name

Email

Mobile Number (with country code)

Password

3. Upload & Distribute Lists

Upload CSV/XLSX/AXLS files containing:

FirstName (Text)

Phone (Number)

Notes (Text)

File format validation included.

Distributes uploaded items equally among 5 agents.

Example: 25 items → each agent gets 5.

Remainders are distributed sequentially.

Distributed lists are saved in MongoDB.

Frontend displays assigned lists per agent.

🛠️ Tech Stack

Frontend: React.js / Next.js

Backend: Node.js + Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

File Handling: multer, csv-parser, xlsx

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/mern-list-distribution.git
cd mern-list-distribution

2. Backend Setup
cd backend
npm install


Create a .env file inside backend/ with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Run the backend:

npm start

3. Frontend Setup
cd frontend
npm install


Create a .env file inside frontend/ with:

REACT_APP_API_URL=http://localhost:5000


Run the frontend:

npm start

4. Open in Browser
http://localhost:3000

📂 Project Structure
mern-list-distribution/
│
├── backend/              # Express.js + MongoDB
│   ├── models/           # Mongoose schemas (User, Agent, List)
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── middleware/       # JWT auth, error handling
│   ├── uploads/          # Uploaded CSV/XLSX files
│   └── server.js         # Entry point
│
├── frontend/             # React/Next.js frontend
│   ├── src/components/   # Reusable components
│   ├── src/pages/        # Pages (Login, Dashboard, Agents, Upload)
│   ├── src/services/     # API calls
│   └── src/App.js        # Main app
│
├── README.md             # Documentation
└── package.json

🧪 API Endpoints
Auth Routes

POST /api/auth/login → Admin login

Agent Routes

POST /api/agents → Add agent

GET /api/agents → Get all agents

PUT /api/agents/:id → Update agent

DELETE /api/agents/:id → Delete agent

List Routes

POST /api/lists/upload → Upload & distribute CSV/XLSX

GET /api/lists → Get distributed lists

✅ Validation & Error Handling

Login → Invalid credentials handled with proper error messages.

File Upload → Only .csv, .xlsx, .axls allowed.

Agent Creation → Duplicate email validation.

List Distribution → Edge cases handled (remainders distributed).

📽️ Demo

A working demo video of the application is available here:
👉 Google Drive Demo Link
 (Replace with your video link)

🏆 Evaluation Criteria

✔ Functionality – Meets all requirements
✔ Code Quality – Clean, modular, well-documented
✔ Validation & Error Handling – Robust and secure
✔ User Interface – Simple and user-friendly
✔ Execution – Easy to set up and run

👨‍💻 Author

Developed with ❤️ using the MERN stack.

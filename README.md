```markdown
# EmpowerHer

EmpowerHer is a web application dedicated to empowering women by providing resources, community support, and AI‑powered chat functionality. It features a responsive React frontend and a robust Node.js/Express backend with MongoDB.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)  
  - [Clone the Repository](#clone-the-repository)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication & authorization (JWT)
- AI‑powered chat (via `/backend/routes/chat.js`)
- Resource directory for articles, links & mentorship
- Multi‑language support (i18n)
- Smooth animations with Framer Motion
- Responsive design with Tailwind CSS

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, React Router, i18next, Framer Motion  
- **Backend**: Node.js, Express, MongoDB (Mongoose), CORS, dotenv  
- **Deployment**: Netlify (frontend), Heroku/Vercel (backend)

## Prerequisites
- Node.js v16+ & npm  
- MongoDB Atlas account or local MongoDB instance

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/ManasPatil281/EmpowerHer.git
cd EmpowerHer
```

### Backend Setup
1. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in `backend/` with the following variables:
   ```env
   MONGODB_URI=your_mongo_connection_string
   PORT=5000
   ```
3. Start the backend server in development mode:
   ```bash
   npm run dev
   ```
   The backend will run at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
2. (Optional) Create a `.env` file in `frontend/` to override the API URL:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run at `http://localhost:5173`.

## Environment Variables

### Backend (`backend/.env`)
```env
MONGODB_URI=your_mongo_connection_string
PORT=5000
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000
```

## Project Structure
```
EmpowerHer/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── index.js
│   ├── routes/
│   │   └── chat.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## Scripts
### Backend
- `npm run dev` – Start server with nodemon (watch & reload)

### Frontend
- `npm run dev` – Start Vite development server  
- `npm run build` – Build for production  
- `npm run preview` – Preview production build

## Contributing
Contributions are welcome! Please follow these steps:
1. **Fork the repository**  
2. **Create a feature branch**  
   ```bash
   git checkout -b feature/YourFeature
   ```  
3. **Make your changes & commit**  
   ```bash
   git add .
   git commit -m "Add YourFeature"
   ```  
4. **Push to your branch**  
   ```bash
   git push origin feature/YourFeature
   ```  
5. **Open a Pull Request** detailing your changes

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
```

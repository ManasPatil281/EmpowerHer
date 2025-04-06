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
Backend Setup
cd backend
npm install
Create a .env file in backend/
npm run dev
Frontend Setup
cd ../frontend
npm install
Start the development server:
npm run dev
Contributing
Contributions are welcome!

Fork the repository

Create a branch:

bash
git checkout -b feature/YourFeature
Make your changes & commit:

bash
git commit -m "Add YourFeature"
Push to your branch:

bash
git push origin feature/YourFeature

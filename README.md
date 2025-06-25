Passwords are hashed and compared using bcrypt — so stored passwords are secure even in a local file.

JWT tokens are returned after a successful login but are not yet stored or used on the frontend — that’s one of the next steps I’m planning.

# Login App (Intern Project)

This project is a functional login system I built while interning — combining frontend and backend logic to better understand how authentication works in a real-world application. Throughout the process, I refined my understanding of RESTful APIs, password encryption, and token-based authentication.

## Overview

The app allows users to log in using their email and password. The frontend is a simple form built with HTML and JavaScript, and the backend is powered by Node.js with Express. The authentication flow is secured using `bcrypt` for password hashing and `jsonwebtoken` (JWT) for session handling.

## What I Learned

As I built this project, I studied and implemented:

- **Routing and HTTP methods** with Express
- How to structure a basic **frontend-to-backend communication flow**
- **How `bcrypt` works** for safely storing and comparing hashed passwords
- **How JWTs are generated**, how they store user data, and how to send them securely
- How to use `.env` files to protect sensitive information (like secret keys)
- **Git and GitHub basics**: initializing a repo, pushing code, writing commits, and using `.gitignore`

## Features

- Frontend login form with real-time input capture
- Backend API to handle `POST /login` requests
- Secure password comparison using bcrypt
- JWT token generation upon successful login
- Use of environment variables with `dotenv` for managing sensitive data
- GitHub repo with clean project structure and `.gitignore` in place

## Tech Stack

- **Node.js**
- **Express**
- **bcrypt**
- **jsonwebtoken (JWT)**
- **dotenv**
- **HTML/CSS/JavaScript**
- Git for version control

Possible Next Steps
 Add a sign-up route and form for new user registration

 Implement token-based route protection

 Add frontend handling of token (store in localStorage or cookie)

 Replace the users.json file with a real database (like MongoDB or PostgreSQL)

 Improve error handling and response messages
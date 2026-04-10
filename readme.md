# Serverless Email API

A lightweight backend microservice built with Node.js, Express, and Nodemailer to handle email delivery. This API is configured to run as a serverless function on Vercel, making it perfect for connecting to frontends or mobile applications.

---

## 🛠️ Tech Stack

* **Node.js** & **Express**: For handling the API endpoints.
* **Nodemailer**: For SMTP email delivery.
* **Vercel**: For free, serverless hosting.
* **CORS**: To allow requests from mobile apps and web frontends.

---

## 🚀 Local Setup

### 1. Install Dependencies

Clone the repository and install the required packages:

```bash
npm init -y
npm install express nodemailer cors dotenv
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your SMTP credentials. Do not commit this file to version control.

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```
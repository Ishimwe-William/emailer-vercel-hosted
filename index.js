const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors());         // Allows cross-origin requests

// Configure the email transporter using your SMTP credentials
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// The API Endpoint
app.post('/api/send-email', async (req, res) => {
    // 1. Extract appName along with the rest of the data
    const { to, subject, htmlData, appName } = req.body;

    if (!to || !htmlData) {
        return res.status(400).json({ error: 'Missing receiver (to) or htmlData' });
    }

    try {
        // 2. Set a fallback name just in case the appName is missing
        const senderName = appName || 'Smart Box System';

        const mailOptions = {
            from: `"${senderName}" <${process.env.SMTP_USER}>`, // 3. Use dynamic sender Name
            to: to,
            subject: subject || 'No Subject',
            html: htmlData,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email.' });
    }
});

// REMOVE THIS:
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//    console.log(`Email service running on port ${PORT}`);
// });

// ADD THIS INSTEAD:
module.exports = app;
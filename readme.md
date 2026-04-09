```bash
    npm init -y
    npm install express nodemailer cors dotenv
```

```js
const sendEmail = async () => {
  try {
    const response = await fetch('https://your-azure-app-url.azurewebsites.net/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'customer@example.com',
        subject: 'Welcome to the App!',
        htmlData: '<h1>Hello!</h1><p>Thanks for signing up.</p>'
      }),
    });

    const data = await response.json();
    if (data.success) {
      console.log('Email sent!');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Dummy login route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'user@example.com' && password === 'password123') {
        res.json({ success: true, name: 'User' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Dummy chat response route
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    const responses = [
        "I'm DeepSeek, an AI assistant. How can I help you?",
        "I can help with various tasks including coding, writing, and research.",
        "DeepSeek-V3 has comprehensive progress in key capabilities.",
        "You can access me on web, app, and API."
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    res.json({ reply: response });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

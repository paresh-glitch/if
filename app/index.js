const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({ status: 'broken' });
});

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

module.exports = server;

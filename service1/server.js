const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from Service 1!');
});

app.listen(port, () => {
    console.log(`Service 1 is running on http://localhost:${port}`);
});
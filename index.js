const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<p>Local Explorer Server is running!</p>');
});


// Start the Express server
app.listen();
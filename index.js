const express = require('express');
const app = express();
const PORT = 4000;

// Simple route
app.get('/', (req, res) => {
    res.send('🚀 Welcome to the CICD Project Node App!');
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

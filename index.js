const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('🚀 CICD Project deployed successfully on Azure!');
});

// ✅ Use Azure's dynamic port OR fallback to 4000 locally
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

const express = require('express');
const appRoutes = require('./routes');
const PORT = 8001;
const app = express();

app.use("/", appRoutes);

app.listen(PORT, () => {
    console.log("Application started...");
})
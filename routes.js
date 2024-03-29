const express = require('express');

const router = express.Router();

// Welcome page
router.get("/", (req, res) => {
    console.log("Welcome to Node js APIs with Sequelize ORM");
});

module.exports = router;
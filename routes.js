const express = require('express');

const router = express.Router();

// Welcome page
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Node js APIs with Sequelize ORM"
    })
});

module.exports = router;
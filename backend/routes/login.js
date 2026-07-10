const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        message: "Login Route Working"
    });
});

// User Login
router.post("/user", async (req, res) => {
    console.log("Login API Called");
    console.log(req.body);

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        res.status(200).json({
            email: user.email,
            fullName: user.fullName
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Server Error"
        });

    }
});

module.exports = router;
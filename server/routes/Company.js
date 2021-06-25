const express = require("express");
const router = express.Router();
const { Company } = require("../models");
router.get("/", async (req, res) => {
    const companies = await Company.findAll();
    res.json(companies);
});

router.post("/", async (req, res) => {
    const company = req.body;
    await Company.create(company);
    res.json(company);
});


module.exports = router;
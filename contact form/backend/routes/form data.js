const express = require("express");
const { sendMail } = require("../controllers/form data");
const router = express.Router();

router.post("/send-mail",sendMail);


module.exports = router;
const express = require('express')
const router = express.Router();

const {imageUpload, vedeoUpload, imageReducerUpload, localFileUpload} = require("../controllers/fileUpload")

//api route
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);

module.exports = router;
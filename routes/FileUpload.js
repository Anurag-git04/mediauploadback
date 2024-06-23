const express = require('express')
const router = express.Router();

const {imageUpload, vedioUpload, imageReducerUpload, localFileUpload} = require("../controllers/fileUpload")

//api route
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/vedioUpload",vedioUpload)

module.exports = router;
const path = require("path")
const rootdir = require('../utils/path');

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    // console.log("Hello from the products middleware");
    res.sendFile(path.join(rootdir, "views", "shop.html"))
});


module.exports = router
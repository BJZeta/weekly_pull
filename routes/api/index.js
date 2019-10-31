const router = require("express").Router();
const comics = require("./comicApiRoute");

router.use("/comics", comics);

module.exports = router;
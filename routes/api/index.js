const router = require("express").Router();
const comics = require("./comicApiRoute");
const customer = require('./customerApiRoute');
const store = require('./storeApiRoutes');

router.use("/comics", comics);
router.use('/customer', customer);
router.use('/store', store);

module.exports = router;
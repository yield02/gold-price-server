const router = require("express").Router();

router.use("/gold-price", require("./goldprice"));

module.exports = router;

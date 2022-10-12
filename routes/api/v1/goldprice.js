const router = require("express").Router();
const conn = require("../../../db");

router.get("/", (req, res, next) => {
  conn.query(
    "SELECT * FROM GIAVANG, VANG, TINH_TP WHERE GIAVANG.MAVANG = VANG.MAVANG AND GIAVANG.MATTP = TINH_TP.MATTP",
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.get("/:maVang", (req, res, next) => {
  conn.query(
    `SELECT * FROM GIAVANG, VANG, TINH_TP WHERE GIAVANG.MAVANG = VANG.MAVANG AND GIAVANG.MATTP = TINH_TP.MATTP AND VANG.MAVANG='${req.params.maVang}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.post("/them-vang", (req, res, next) => {
  conn.query(
    `INSERT INTO VANG (MAVANG, TENVANG) VALUES ('${req.query.mavang}', '${req.query.tenvang}')`
  );
  res.send(req.query);
});

router.post("/them-ttp", (req, res, next) => {
  conn.query(
    `INSERT INTO TINH-TP (MATTP, TENTTP) VALUES ('${req.query.mattp}', '${req.query.tenttp}')`
  );
  res.send(req.query);
});



module.exports = router;

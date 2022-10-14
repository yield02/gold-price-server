const router = require("express").Router();
const conn = require("../../../db");

router.get("/", (req, res, next) => {
  conn.query(
    "SELECT * FROM GIAVANG, LOAIVANG, KHUVUC WHERE GIAVANG.MALV = LOAIVANG.MALV AND GIAVANG.MAKV = KHUVUC.MAKV",
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.get("/:maVang", (req, res, next) => {
  conn.query(
    `SELECT * FROM GIAVANG, LOAIVANG, KHUVUC WHERE GIAVANG.MALV = LOAIVANG.MALV AND GIAVANG.MAKV = KHUVUC.MAKV AND LOAIVANG.MALV='${req.params.maVang}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.post("/them-vang", (req, res, next) => {
  conn.query(
    `INSERT INTO LOAIVANG (MALV, TENLV) VALUES ('${req.query.mavang}', '${req.query.tenvang}')`
  );
  res.send(req.query);
});

router.post("/them-ttp", (req, res, next) => {
  conn.query(
    `INSERT INTO KHUVUC (MAKV, TENKV) VALUES ('${req.query.mattp}', '${req.query.tenttp}')`
  );
  res.send(req.query);
});



module.exports = router;

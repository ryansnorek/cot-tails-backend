const router = require("express").Router();
const Cot = require("../models/cot-model");

router.get("/report", (req, res, next) => {
  res.json("report");
});

router.get("/history/metrics", (req, res, next) => {
  console.log("helloooooo");
  
  Cot.getAllMetrics()
    .then((metrics) => {
      res.json(metrics);
    })
    .catch(next);
});

module.exports = router;

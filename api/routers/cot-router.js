const router = require("express").Router();
const Cot = require("../models/cot-model");

router.get("/report", (req, res, next) => {
  res.json("report");
});

router.get("/history/metrics", (req, res, next) => {
  Cot.getAllMetrics()
    .then((metrics) => {
      res.json(metrics);
    })
    .catch(next);
});

router.get("/history/metrics/:year", (req, res, next) => {
    Cot.getMetricsByYear(req.params.year)
    .then((metrics) => {
      res.json(metrics);
    })
    .catch(next);
})

module.exports = router;

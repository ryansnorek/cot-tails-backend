const router = require("express").Router();
const Cot = require("../models/cot-model");

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
});

router.get("/report", async (req, res, next) => {
  Cot.fetchReport()
    .then((report) => {
      res.json(report.data);
    })
    .catch(next);
});

module.exports = router;

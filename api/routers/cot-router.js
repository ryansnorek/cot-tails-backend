const router = require("express").Router();
const Cot = require("../models/cot-model");
const axios = require("../../node_modules/axios");

router.get("/report", (req, res, next) => {
  axios
    .get("https://www.cftc.gov/dea/newcot/FinFutWk.txt")
    .then((report) => {
      res.json(report);
    })
    .catch(next);
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
});

module.exports = router;

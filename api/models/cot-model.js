const db = require("../data/db-config");
const axios = require("../../node_modules/axios");

module.exports = {
    getAllMetrics,
    getMetricsByYear,
    fetchReport,
}

function getAllMetrics() {
    return db("cot_history_metrics");
}

function getMetricsByYear(year) {
    return db("cot_history_metrics").where("cot_year", year);
}

function fetchReport() {
    return axios.get("https://www.cftc.gov/dea/newcot/FinFutWk.txt");
  }
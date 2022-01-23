const db = require("../data/db-config");

module.exports = {
    getAllMetrics,
    getMetricsByYear,
}

function getAllMetrics() {
    return db("cot_history_metrics");
}

function getMetricsByYear(year) {
    return db("cot_history_metrics").where("cot_year", year);
}
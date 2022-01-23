const db = require("../data/db-config");

module.exports = {
    getAllMetrics,
}

function getAllMetrics() {
    return db("cot_history_metrics");
}

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    designation: String,
    salary: Number,
    joining_date: String
});

module.exports = mongoose.model("Employee", employeeSchema);
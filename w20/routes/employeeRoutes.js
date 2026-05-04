const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel");

/* ADD EMPLOYEE */
router.get("/add", async (req, res) => {
    await Employee.create({
        name: "Rahul",
        department: "IT",
        designation: "Developer",
        salary: 50000,
        joining_date: "2026-04-28"
    });
    res.send("Employee Added");
});

/* VIEW ALL EMPLOYEES */
router.get("/employees", async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
});

/* UPDATE EMPLOYEE */
router.get("/update", async (req, res) => {
    await Employee.updateOne(
        { name: "Rahul" },
        { salary: 70000 }
    );
    res.send("Employee Updated");
});

/* DELETE EMPLOYEE */
router.get("/delete", async (req, res) => {
    await Employee.deleteOne({ name: "Rahul" });
    res.send("Employee Deleted");
});

module.exports = router;
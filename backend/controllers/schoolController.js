const db = require("../config/db");

// delete image form folder
const fs = require("fs");
const path = require("path");

// Add school
exports.addSchool = (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const imagePath = `/schoolImages/${req.file.filename}`;

  const sql = `
    INSERT INTO schools (name, address, city, state, contact, image, email_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, address, city, state, contact, imagePath, email_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "School added successfully!" });
  });
};

// Get all schools
exports.getSchools = (req, res) => {
  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      console.log("DB Error", err)
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// DELETE school
exports.deleteSchool = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM schools WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "School not found" });
    }
    res.json({ message: "School deleted successfully" });
  });
};
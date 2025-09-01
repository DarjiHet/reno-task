const db = require("../config/db");

const createSchoolsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      contact BIGINT NOT NULL,
      image TEXT NOT NULL,
      email_id TEXT NOT NULL
    );
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ Error creating table:", err);
    } else {
      console.log("✅ Table 'schools' ready");
    }
  });
};

module.exports = createSchoolsTable;
const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // import db
const schoolRoutes = require("./routes/addSchool");
const createSchoolsTable = require('./models/initDB')

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Vite frontend URL
  credentials: true
}));
app.use(express.json());
app.use("/schoolImages", express.static("schoolImages"));

createSchoolsTable();

// Routes
app.use("/api", schoolRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

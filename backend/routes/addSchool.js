const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addSchool, getSchools, deleteSchool } = require("../controllers/schoolController");

const storage = multer.diskStorage({
  destination: "schoolImages/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/add", upload.single("image"), addSchool);
router.get("/", getSchools);
router.delete("/:id", deleteSchool);   

module.exports = router;
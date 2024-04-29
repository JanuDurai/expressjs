const express = require("express");
const app = express();
const multer = require("multer");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res, next) => {
  res.status(200).json({ message: "File uploaded successfully" });
});

app.listen(7000, () => {
  console.log(`Server running`);
});

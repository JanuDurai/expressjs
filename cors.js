const express = require("express");
const cors = require("cors");
const app = express();

const whitelist = ["http://localhost:7000"];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin", origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// API routes
app.get("/api/booklist", (req, res) => {
  res.send(`Book details`);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

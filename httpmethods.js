const express = require("express");
const fs = require("fs");
let app = express();

app.listen(7000, () => {
  console.log(`Server running`);
});

const readFile = JSON.parse(fs.readFileSync("./personDetails.json"));

//get
app.get("/:id", (req, res) => {
  const found = readFile.filter((person) => person.id == req.params.id);
  if (found != "")
    res.status(200).json({ status: "success", data: { user: found } });
  else res.status(400).json({ status: "fail", data: "Invalid ID" });
});

//post

app.use(express.json());

app.post("/post", (req, res) => {
  const newId = readFile[readFile.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);
  readFile.push(newUser);
  fs.writeFile("./personDetails.json", JSON.stringify(readFile), (err) => {
    res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  });
});

//get with  query params

app.get("/:id/:username", (req, res) => {
  const found = readFile.filter(
    (person) => person.id == req.params.id && person.Name == req.params.username
  );
  if (found != "")
    res.status(200).json({ status: "success", data: { user: found } });
  else res.status(400).json({ status: "failure", data: "User Not Found" });
});

//put

app.put("/put/:id", (req, res) => {
  const foundId = readFile.findIndex((person) => person.id == req.params.id);
  if (foundId != undefined) {
    const foundUser = Object.assign(readFile[foundId], req.body);
    readFile[foundId] = foundUser;
    fs.writeFile("./personDetails.json", JSON.stringify(readFile), (err) => {
      res.status(201).json({
        status: "success",
        data: { user: foundUser },
      });
    });
  } else {
    res.status(400).json({ status: "failure", data: "User Not Found" });
  }
});

// delete

app.delete("/delete/:id", (req, res) => {
  const foundIndex = readFile.findIndex((person) => person.id == req.params.id);
  if (foundIndex != undefined) {
    const deleteUser = readFile.splice(foundIndex, 1);
    fs.writeFile("./personDetails.json", JSON.stringify(readFile), (err) => {
      res.status(201).json({
        status: "success",
        data: { user: deleteUser },
      });
    });
  } else {
    res.status(400).json({ status: "failure", data: "User Not Found" });
  }
});

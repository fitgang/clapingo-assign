const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get("/login", (req, res) => res.sendFile(__dirname + "/views/login.html"));

app.get("/loggedIn", (req, res) => res.sendFile(__dirname + "/views/loggedIn.html"))

app.listen(port, () => console.log("Listening on " + port));
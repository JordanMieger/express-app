const express = require("express");

const app = express();

const port = 5000;

const cocktails = [
  {
    id: 1,
    name: "Margarita",
  },
  {
    id: 2,
    name: "Mojito",
  },
  {
    id: 3,
    name: "Cuba Libre",
  },
];

const getCocktails = (req, res) => {
  res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails);

const handler = (req, res) => {};

const welcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);

app.get("/search", handler);

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Something bad happened !");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

const express = require("express");
const cartItems = require('./cart-items');

const app= express();

app.use(express.json());



app.use("/", cartItems);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));

console.log("http://localhost:" + port + "/cart-items");
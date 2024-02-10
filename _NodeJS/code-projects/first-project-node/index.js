const express = require("express");

const app = express();

const port = 4100;

app.get("/users", (request, response) => {
    return response.send("Hello Node!");
});

app.listen(port, () => {
    console.log(`☕ Server started.`)
});
const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.json({
        message : "Just a simple response at the simple route"
    })
});
app.get("/route", (request, response) => {
	response.json({
        message : "Hello, I am a response from the server the 2nd manual time now its time for the ci cd things to happen!"
    })
});

app.listen(8080, () => {
	console.log("Server running on port 8080");
});

const express = require("express");

const app = express();

app.get("/route", (request, response) => {
	response.json({
        message : "Hello, I am a response from the server!"
    })
});

app.listen(8080, () => {
	console.log("Server running on port 8080");
});

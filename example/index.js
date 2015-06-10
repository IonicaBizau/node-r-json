// Dependencies
var ReadJson = require("../lib");

// Read the json file asynchronously
ReadJson(__dirname + "/test.json", function (err, data) {
    console.log(err || data);
});

// Read the same file synchronously
console.log(ReadJson(__dirname + "/test.json"));

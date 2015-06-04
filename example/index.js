var ReadJson = require("../lib");

ReadJson(__dirname + "/test.json", function (err, data) {
    console.log(err || data);
});

console.log(ReadJson(__dirname + "/test.json"));

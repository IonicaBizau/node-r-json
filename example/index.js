// Dependencies
var ReadJson = require("../lib");

// Read the json file asynchronously
ReadJson(__dirname + "/test.json", function (err, data) {
    console.log(err || data);
});

// Read the same file synchronously
console.log(ReadJson(__dirname + "/test.json"));

// Read another JSON file asynchronously, with a default value and a custom w_json config
ReadJson.defaultRead(
    "./test2.json",
    {myDefaultKey: "myDefaultValue"},
    { new_line: true, space: 4},
    function (err, data) {
        console.log(err || data);
    }
);

// Read the other JSON file synchronously, with a default value
console.log(
    ReadJson.defaultRead(
        "./test2.json",
        {myDefaultKey: "myDefaultValue"}
    )
);
## Documentation

You can see below the API reference of this module.

### `rJson(path, callback)`

#### Params

- **String** `path`: The JSON file path.
- **Function** `callback`: An optional callback. If not passed, the function will run in sync mode.

### `rJson_default(path, def_value, w_json_options, callback)`

If there is some error in reading the JSON file, this would overwrite the file with the default
     value and return the same.
This uses [node-w-json](https://github.com/IonicaBizau/node-w-json) for writing the default JSON
     value and so you can pass configs to node-w-json to beautify the file written

#### Params

- **String** `path`: The JSON file path.
- **Object** `def_value`: The Default Value
- **Object|Number|Boolean** `w_json_options`: Optional: w-json config object containing the fields below. If boolean, it will be handled as `new_line`, if number it will be handled as `space`.

 - `space` (Number): An optional space value for beautifying the json output (default: `2`).
 - `new_line` (Boolean): If `true`, a new line character will be added at the end of the stringified content.
- **Function** `callback`: An optional callback. If not passed, the function will run in sync mode.


# r-json [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/r-json.svg)](https://www.npmjs.com/package/r-json) [![Downloads](https://img.shields.io/npm/dt/r-json.svg)](https://www.npmjs.com/package/r-json) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A small module to read JSON files.

If you want to write JSON files, check out [`w-json`](https://github.com/IonicaBizau/node-w-json).

## Installation

```sh
$ npm i --save r-json
```

## Example

```js
// Dependencies
var ReadJson = require("r-json");

// Read the json file asynchronously
ReadJson(__dirname + "/test.json", function (err, data) {
    console.log(err || data);
});

// Read the same file synchronously
console.log(ReadJson(__dirname + "/test.json"));
```

## Documentation

### `rJson(path, callback)`

#### Params
- **String** `path`: The JSON file path.
- **Function** `callback`: An optional callback. If not passed, the function will run in sync mode.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`birthday`](https://github.com/IonicaBizau/birthday)

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`emojic`](https://github.com/IonicaBizau/emojic#readme)

 - [`engine-composition-crud`](https://github.com/IonicaBizau/engine-composition-crud#readme) by jillix

 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) by jillix

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`github-labeller`](https://github.com/IonicaBizau/github-labeller#readme)

 - [`gpm`](https://github.com/IonicaBizau/gpm)

 - [`idea`](https://github.com/IonicaBizau/idea)

 - [`namy`](https://github.com/IonicaBizau/namy)

 - [`web-term`](https://github.com/IonicaBizau/web-term)

 - [`youtube-album-uploader`](https://github.com/jpchip/youtube-album-uploader) by Jared Chapiewsky

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
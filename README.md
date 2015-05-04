# pdf-markdown-annotator [![Build Status](https://travis-ci.org/azu/pdf-markdown-annotator.svg?branch=master)](https://travis-ci.org/azu/pdf-markdown-annotator)


This [NW.js](http://nwjs.io/ "NW.js") app is that PDF Viewer and Markdown annotation/Note tools.

![screenshot](http://monosnap.com/image/2q6e1ZSzMrB5GoEpkKLXYfx77ppmGI.png)

## Installation

- [Download latest binary](https://github.com/azu/pdf-markdown-annotator/releases/latest)

OS X, Windows, Linux support.

## Feature

- PDF Viewer using [pdf.js](https://github.com/mozilla/pdf.js)
- Markdown memo using [CodeMirror](http://codemirror.net/)
- Quote text from PDF

![quote](http://monosnap.com/image/Iy9GhD9zYI43JAjPRpMU0DAcjrPxKr.png)

## Usage

- Open PDF file
- Open Markdown file
- write note & save
    - Automatically save

### On Browser

pdf-markdown-annotator work on Browser too!

```
npm run build
# output dist/build.js
```

```html
<script src="dist/build.js"></script>
<script>
    window.bootstrap({
        // https://github.com/mozilla/pdf.js/blob/master/web/viewer.html URL
        viewerPath: "../pdfjs/web/viewer.html",
        // Display PDF URL
        pdfURL: location.pathname + "Ecma-262_5.1.pdf",
        // Display Markdown URL
        markdownURL: location.pathname + "es5.md"
    });
</script>
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

## Thanks

Inspired by [Highlights App for Mac](http://highlightsapp.net/ "Highlights App for Mac")

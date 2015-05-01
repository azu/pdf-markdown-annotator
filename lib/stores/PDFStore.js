// LICENSE : MIT
"use strict";
// LICENSE : MIT
"use strict";
import { Store } from "material-flux"
import { keys } from "../actions/PDFAction"
var path = require("path");
export default class EditorStore extends Store {
    constructor(context) {
        super(context);
        this.state = {
            URL: "",
            viewerPath: path.join(__dirname, "..", "..", "pdfjs/web/viewer.html")
        };
        this.register(keys.loadURL, this.onLoadURL);
        this.register(keys.changeViewerPath, this.onChangeViewerPath);


        // initial load
        var filePath = localStorage.getItem("pdfFile-URL");
        this.onLoadURL(filePath);
        this.onChange(function () {
            if (this.state.URL) {
                localStorage.setItem("pdfFile-URL", this.state.URL);
            } else {
                localStorage.removeItem("pdfFile-URL");
            }
        });
    }

    getURL() {
        return this.state.URL;
    }

    getViewerPath() {
        return this.state.viewerPath;
    }

    onChangeViewerPath(filePath) {
        this.setState({
            viewerPath: filePath
        });
    }

    onLoadURL(URL) {
        if (URL == null) {
            return;
        }
        this.setState({
            URL: URL
        });
    }
}
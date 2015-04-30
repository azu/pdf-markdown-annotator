// LICENSE : MIT
"use strict";
// LICENSE : MIT
"use strict";
import { Store } from "material-flux"
import { keys } from "../actions/PDFAction"

export default class EditorStore extends Store {
    constructor(context) {
        super(context);
        this.state = {
            URL: ""
        };
        this.register(keys.loadURL, this.onLoadURL);


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

    onLoadURL(URL) {
        if (URL == null) {
            return;
        }
        this.setState({
            URL: URL
        });
    }
}
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
    }

    getURL() {
        return this.state.URL;
    }

    onLoadURL(URL) {
        this.setState({
            URL: URL
        });
    }
}
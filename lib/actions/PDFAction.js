// LICENSE : MIT
"use strict";
import { Action } from "material-flux"
export var keys = {
    loadURL: Symbol("loadURL"),
    changeViewerPath: Symbol("changeViewerPath")
};
export default class PDFAction extends Action {
    load(url) {
        this.dispatch(keys.loadURL, url);
    }

    changeViewerPath(filePath) {
        this.dispatch(keys.changeViewerPath, filePath);
    }
}
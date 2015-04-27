// LICENSE : MIT
"use strict";
import { Action } from "material-flux"
export var keys = {
    loadURL: Symbol("loadURL")
};
export default class PDFAction extends Action {
    load(url) {
        this.dispatch(keys.loadURL, url);
    }
}
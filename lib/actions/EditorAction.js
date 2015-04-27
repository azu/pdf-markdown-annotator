// LICENSE : MIT
"use strict";
import { Action } from "material-flux"
import FileUtils from "../utils/FileUtils"

export var keys = {
    quote: Symbol("quote"),
    saveAsFile: Symbol("saveAsFile"),
    save: Symbol("save")
};
export default class EditorAction extends Action {
    save(text) {
        this.dispatch(keys.save, text);
    }

    /**
     * filePath is options, if filePath is null, open file dialog.
     * @param {string?} filePath save the text to the filePath.
     */
    saveAsFile(filePath) {
        if (filePath == null) {
            FileUtils.openSaveAs(this.saveAsFile.bind(this));
        } else {
            this.dispatch(keys.saveAsFile, filePath);
        }
    }


    quote(text) {
        this.dispatch(keys.quote, text);
    }
}
// LICENSE : MIT
"use strict";
import { Action } from "material-flux"
import FileUtils from "../utils/FileUtils"

export var keys = {
    quote: Symbol("quote"),
    createNewFile: Symbol("createNewFile"),
    saveAsFile: Symbol("saveAsFile"),
    openFile: Symbol("openFile"),
    save: Symbol("save"),
    readonly: Symbol("readonly")
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

    createNewFile() {
        this.dispatch(keys.createNewFile);
    }

    changeReadonly(boolean){
        this.dispatch(keys.readonly, boolean);
    }

    openFile(filePath) {
        if (filePath == null) {
            FileUtils.openFile(this.openFile.bind(this));
        } else {
            this.dispatch(keys.openFile, filePath);
        }
    }

    quote(text) {
        this.dispatch(keys.quote, text);
    }
}
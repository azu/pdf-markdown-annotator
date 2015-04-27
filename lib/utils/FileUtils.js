// LICENSE : MIT
"use strict";
export default class FileUtils {
    static openSaveAs(saveAsFile) {
        var input = document.createElement("input");
        input.type = "file";
        input.setAttribute('nwsaveas', true);
        var listener = function (evt) {
            saveAsFile(this.value);
            input.removeEventListener("change", listener, false);
        };
        input.addEventListener("change", listener, false);
        input.click();
    }

    static openFile(openAsFile) {
        var input = document.createElement("input");
        input.type = "file";
        var listener = function (evt) {
            openAsFile(this.value);
            input.removeEventListener("change", listener, false);
        };
        input.addEventListener("change", listener, false);
        input.click();
    }
}
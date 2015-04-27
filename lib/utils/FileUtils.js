// LICENSE : MIT
"use strict";
export default class FileUtils {
    static openSaveAs(saveAsFile) {
        var input = document.createElement("input");
        input.type = "file";
        input.setAttribute('nwsaveas', true);
        input.addEventListener("change", function (evt) {
            saveAsFile(this.value);
        }, false);
        input.click();
    }
}
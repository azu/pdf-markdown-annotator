// LICENSE : MIT
"use strict";
import { Store } from "material-flux"
import { keys } from "../actions/EditorAction"

var fs = require("fs");
export default class EditorStore extends Store {
    constructor(context) {
        super(context);
        this.state = {
            filePath: null,
            text: "",
            quoteText: "",
            readonly: false
        };
        this.register(keys.quote, this.onQuote);
        this.register(keys.createNewFile, this.onCreateNewFile);
        this.register(keys.save, this.onSave);
        this.register(keys.saveAsFile, this.onSaveAsFile);
        this.register(keys.openFile, this.onOpenFile);
        this.register(keys.readonly, this.onReadonly);


        // initial load
        var filePath = localStorage.getItem("filePath");
        this.onOpenFile(filePath);
        // auto save per 5s
        setInterval(this._onAutoSave.bind(this), 5000);
        // save filePath persistent
        this.onChange(() => {
            if (this.state.filePath) {
                localStorage.setItem("filePath", this.state.filePath);
            } else {
                localStorage.removeItem("filePath");
            }
        });
    }

    _onAutoSave() {
        if (this.state.filePath == null || this.state.text.length === 0) {
            return;
        }
        fs.writeFile(this.state.filePath, this.state.text, (error) => {
            var appName = require("../../package.json").name;
            if (error) {
                options.body = `Fail saving ${filePath}`;
                console.error(error);
                new Notification(appName, {
                    body: `Fail saving ${filePath}`
                });
            }
        });
    }

    getFilePath() {
        return this.state.filePath;
    }

    getText() {
        return this.state.text;
    }

    getQuoteText() {
        return this.state.quoteText;
    }

    isReadonly(){
        return this.state.readonly;
    }

    onCreateNewFile() {
        this.setState({
            filePath: null,
            text: "",
            quoteText: ""
        });
    }

    onOpenFile(filePath) {
        if (filePath == null) {
            return;
        }
        fs.readFile(filePath, (error, data) => {
            var appName = require("../../package.json").name;
            if (error) {
                console.error(error.stack);
                new Notification(appName, {
                    body: `Fail opening ${filePath}`
                });
                return;
            }
            this.setState({
                text: String(data),
                filePath: filePath
            });
        });
    }

    onSaveAsFile(filePath) {
        fs.writeFile(filePath, this.state.text, (error) => {
            var appName = require("../../package.json").name;
            if (error) {
                options.body = `Fail saving ${filePath}`;
                console.error(error);
                new Notification(appName, {
                    body: `Fail saving ${filePath}`
                });
                return;
            }
            this.setState({
                filePath: filePath
            });
        });
    }

    onSave(text) {
        if (text === this.state.text) {
            return;
        }
        this.setState({
            text: text
        });
    }

    onQuote(text) {
        if (text === this.state.quoteText) {
            return;
        }
        this.setState({
            text: this.state.text + "\n" + text,
            quoteText: text
        });

        this.emit("quote", text);
    }

    onReadonly(isReadonly) {
        if (typeof isReadonly === "undefined") {
            return;
        }
        this.setState({
            readonly: isReadonly
        });
    }
}
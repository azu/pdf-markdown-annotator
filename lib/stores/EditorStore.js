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
            quoteText: ""
        };
        this.register(keys.quote, this.onQuote);
        this.register(keys.save, this.onSave);
        this.register(keys.saveAsFile, this.onSaveAsFile);
        this.register(keys.openFile, this.onOpenFile);
        // auto save per 5s
        setInterval(this._onAutoSave.bind(this), 5000);
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
                return;
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


    onOpenFile(filePath) {
        fs.readFile(filePath, (error, data) => {
            var appName = require("../../package.json").name;
            if (error) {
                console.error(error);
                new Notification(appName, {
                    body: `Fail opening ${filePath}`
                });
                return;
            }
            this.setState({
                text: String(data),
                filePath: filePath
            });
            console.log(this.state)
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
    }
}
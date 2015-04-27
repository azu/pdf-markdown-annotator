// LICENSE : MIT
"use strict";
import { Store } from "material-flux"
import { keys } from "../actions/EditorAction"

var fs = require("fs");
export default class EditorStore extends Store {
    constructor(context) {
        super(context);
        this.state = {
            filePath: "",
            text: "",
            quoteText: ""
        };
        this.register(keys.quote, this.onQuote);
        this.register(keys.save, this.onSave);
        this.register(keys.saveAsFile, this.onSaveAsFile);
    }

    getText() {
        return this.state.text;
    }

    getQuoteText() {
        return this.state.quoteText;
    }

    onSaveAsFile(filePath) {
        fs.writeFile(filePath, this.state.text, (error) => {
            if (error) {
                options.body = `Fail saving ${filePath}`;
                console.error(error);
                new Notification("pdf-markdown-annotator", {
                    body: `Fail saving ${filePath}`
                });
                return;
            }
            new Notification("pdf-markdown-annotator", {
                body: `Save ${filePath}`
            });
            this.filePath = filePath;
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
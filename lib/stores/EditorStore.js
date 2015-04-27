// LICENSE : MIT
"use strict";
import { Store } from "material-flux"
import { keys } from "../actions/EditorAction"

export default class EditorStore extends Store {
    constructor(context) {
        super(context);
        this.state = {
            text: "",
            quoteText: ""
        };
        this.register(keys.quote, this.onQuote);
        this.register(keys.save, this.onSave);
    }

    getText() {
        return this.state.text;
    }

    getQuoteText() {
        return this.state.quoteText;
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
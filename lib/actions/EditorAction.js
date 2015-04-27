// LICENSE : MIT
"use strict";
import { Action } from "material-flux"
export var keys = {
    quote: Symbol("quote"),
    save: Symbol("save")
};
export default class EditorAction extends Action {
    save(text) {
        this.dispatch(keys.save, text);
    }

    quote(text) {
        this.dispatch(keys.quote, text);
    }
}
// LICENSE : MIT
"use strict";
import {Context} from 'material-flux';
import EditorAction from "./actions/EditorAction"
import EditorStore from "./stores/EditorStore"

export default class MainContext extends Context {
    constructor() {
        super();
        this.editorAction = new EditorAction(this);
        this.editorStore = new EditorStore(this);
    }
}
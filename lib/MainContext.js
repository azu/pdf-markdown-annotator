// LICENSE : MIT
"use strict";
import {Context} from 'material-flux';
import EditorAction from "./actions/EditorAction"
import EditorStore from "./stores/EditorStore"
import PDFAction from "./actions/PDFAction"
import PDFStore from "./stores/PDFStore"

export default class MainContext extends Context {
    constructor() {
        super();
        this.editorAction = new EditorAction(this);
        this.PDFAction = new PDFAction(this);
        this.PDFStore = new PDFStore(this);
        this.editorStore = new EditorStore(this);
    }
}
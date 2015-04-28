// LICENSE : MIT
"use strict";
var React = require("react");
var ReactCodeMirror = require("react-code-mirror");
require("codemirror/addon/mode/overlay.js");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/markdown/markdown.js");
require("codemirror/mode/gfm/gfm.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/mode/css/css.js");
require("codemirror/mode/htmlmixed/htmlmixed.js");
require("codemirror/mode/clike/clike.js");
require("codemirror/mode/meta.js");
require("codemirror/addon/edit/continuelist.js");
export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorStore = this.props.context.editorStore;
        var editorAction = this.props.context.editorAction;
        this.extraKeys = {
            "Cmd-S": ()=> {
                var filePath = this.editorStore.getFilePath();
                editorAction.saveAsFile(filePath);
                return false;
            },
            "Enter": "newlineAndIndentContinueMarkdownList"
        };
    }

    componentDidMount() {
        var nodes = React.findDOMNode(this);
        this.editor = nodes.querySelector(".CodeMirror").CodeMirror;
        this.editorStore.onChange(this._onChange.bind(this));

    }

    _onChange() {
        var text = this.editorStore.getText();
        if (this.editor.getValue() != text) {
            this.editor.setValue(text);
        }
    }

    _codeMirrorOnChange() {
        var text = this.editor.getValue();
        var savedtext = this.editorStore.getText();
        if (savedtext === text) {
            return;
        }
        var action = this.props.context.editorAction;
        action.save(text);
    }

    componentWillUnmount() {
        this.editorStore.removeAllChangeListeners();
    }

    render() {
        return <div className="MarkdownEditor">
            <ReactCodeMirror mode="gfm"
                             lineWrapping="true"
                             lineNumbers="true"
                             extraKeys={this.extraKeys}
                             onChange={this._codeMirrorOnChange.bind(this)}/>
        </div>

    }
}
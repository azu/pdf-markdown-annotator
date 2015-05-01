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


function scrollToBottom(cm) {
    var line = cm.lineCount();
    cm.setCursor({line: line, ch: 0});
    var myHeight = cm.getScrollInfo().clientHeight;
    var coords = cm.charCoords({line: line, ch: 0}, "local");
    cm.scrollTo(null, (coords.top + coords.bottom - myHeight) / 2);
}
export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorStore = this.props.context.editorStore;
        var editorAction = this.props.context.editorAction;
        this.editorStore.on("quote", (quoteText)=> {
            setTimeout(()=> {
                scrollToBottom(this.editor);
            }, 64);
        });
        this.extraKeys = {
            "Cmd-S": ()=> {
                var filePath = this.editorStore.getFilePath();
                editorAction.saveAsFile(filePath);
                return false;
            },
            "Cmd-N": ()=> {
                editorAction.createNewFile();
                return false;
            },
            "Cmd-O": ()=> {
                editorAction.openFile();
                return false;
            },
            "Enter": "newlineAndIndentContinueMarkdownList"
        };

    }

    componentDidMount() {
        var nodes = React.findDOMNode(this);
        this.editor = nodes.querySelector(".CodeMirror").CodeMirror;
    }

    _codeMirrorOnChange(cm, change) {
        var text = this.editor.getValue();
        if (this.props.source === text) {
            return;
        }
        var action = this.props.context.editorAction;
        action.save(text);
    }

    render() {
        return <div className="MarkdownEditor">
            <ReactCodeMirror value={this.props.source}
                             mode="gfm"
                             lineWrapping="true"
                             lineNumbers="true"
                             extraKeys={this.extraKeys}
                             onChange={this._codeMirrorOnChange.bind(this)}/>
        </div>

    }
}
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
var extraKeys = {
    "Enter": "newlineAndIndentContinueMarkdownList"
};
export default class MarkdownEditor extends React.Component {
    render() {
        return <div className="MarkdownEditor">
            <ReactCodeMirror mode="gfm" lineNumbers="true" extraKeys={extraKeys}/>
        </div>

    }
}
"use strict";
var React = require("react");
var Markdown = require('react-remarkable');
export default class MarkdownPreview extends React.Component {
    onClick(event) {
        var aTag = event.target;
        if (aTag.nodeName !== "A") {
            return;
        }
        var href = aTag.getAttribute("href");
        if (/\.pdf/.test(href)) {
            this.props.context.PDFAction.load(href);
            event.stopPropagation();
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="MarkdownPreview">
                <div className="markdown-body" onClick={this.onClick.bind(this)}>
                    <Markdown source={this.props.source}/>
                </div>
            </div>
        )
    }
}
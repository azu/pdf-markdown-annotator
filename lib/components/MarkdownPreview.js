"use strict";
var React = require("react");
var Markdown = require('react-remarkable');
export default class MarkdownPreview extends React.Component {
    render() {
        return (
            <div className="MarkdownPreview">
                <div className="markdown-body">
                    <Markdown source={this.props.source}/>
                </div>
            </div>
        )
    }
}
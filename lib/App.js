// LICENSE : MIT
"use strict";
var React = require("react");
var PDFViewer = require("./components/PDFViewer");
var MarkdownEditor = require("./components/MarkdownEditor");
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="PDFViewer-container">
                    <PDFViewer />
                </div>
                <div className="MarkdownEditor-container">
                    <MarkdownEditor />
                </div>
            </div>
        )
    }
}
React.render(<App/>, document.body);
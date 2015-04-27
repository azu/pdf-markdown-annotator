// LICENSE : MIT
"use strict";
var React = require("react");
var PDFViewer = require("./components/PDFViewer");
var MarkdownEditor = require("./components/MarkdownEditor");
var MarkdownToolbar = require("./components/MarkdownToolbar");
import MainContext from "./MainContext.js"
var context = new MainContext();
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="PDFViewer-container">
                    <PDFViewer context={context}/>
                </div>
                <div className="MarkdownEditor-container">
                    <MarkdownToolbar context={context}/>
                    <MarkdownEditor context={context}/>
                </div>
            </div>
        )
    }
}
React.render(<App/>, document.body);
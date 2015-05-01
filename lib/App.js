// LICENSE : MIT
"use strict";
var React = require("react");
var PDFViewer = require("./components/PDFViewer");
var MarkdownToolbar = require("./components/MarkdownToolbar");
var MarkdownEditor = require("./components/MarkdownEditor");
var MarkdownPreview = require("./components/MarkdownPreview");
import MainContext from "./MainContext.js"
var context = new MainContext();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.PDFStore = context.PDFStore;
        this.editorStore = context.editorStore;
        this.state = {
            readonly: this.editorStore.isReadonly(),
            pdfURL: this.PDFStore.getURL()
        };
    }

    componentDidMount() {
        this.PDFStore.onChange(this._PDFonChange.bind(this));
        this.editorStore.onChange(this._editorChange.bind(this));
    }

    _editorChange() {
        this.setState({
            readonly: this.editorStore.isReadonly()
        });
    }

    _PDFonChange() {
        this.setState({
            pdfURL: this.PDFStore.getURL()
        });
    }

    componentWillUnmount() {
        this.PDFStore.removeAllChangeListeners();
        this.editorStore.removeAllChangeListeners();
    }

    render() {
        // toggle by MarkdownToolbar
        var MarkdownComponent;
        if (this.state.readonly) {
            MarkdownComponent = <MarkdownPreview context={context} source={this.editorStore.getText()}/>;
        } else {
            MarkdownComponent = <MarkdownEditor context={context} source={this.editorStore.getText()}/>
        }
        return (
            <div className="App">
                <div className="PDFViewer-container">
                    <PDFViewer context={context} pdfURL={this.state.pdfURL}/>
                </div>
                <div className="MarkdownEditor-container">
                    <MarkdownToolbar context={context}/>
                    {MarkdownComponent}
                </div>
            </div>
        )
    }
}

/**
 * bootstrap function
 * optional: to pass object { pdfURL, markdownURL }
 */
module.exports = function bootstrap({
    pdfURL,
    markdownURL,
    viewerPath
    } = {}) {
    if (pdfURL) {
        context.PDFAction.load(pdfURL);
    }
    if (viewerPath) {
        context.PDFAction.changeViewerPath(viewerPath);
    }
    if (markdownURL) {
        context.editorAction.openFile(markdownURL);
        context.editorAction.changeReadonly(true);
    }

    React.render(<App/>, document.body);
};

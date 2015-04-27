// LICENSE : MIT
"use strict";
var React = require("react");
var PDFViewer = require("./components/PDFViewer");
var MarkdownToolbar = require("./components/MarkdownToolbar");
var MarkdownEditor = require("./components/MarkdownEditor");
import MainContext from "./MainContext.js"
var context = new MainContext();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.PDFStore = context.PDFStore;
        this.state = {
            pdfURL: this.PDFStore.getURL()
        };
    }

    componentDidMount() {
        this.PDFStore.onChange(this._PDFonChange.bind(this));
    }

    _PDFonChange() {
        this.setState({
            pdfURL: this.PDFStore.getURL()
        });

    }

    componentWillUnmount() {
        this.PDFStore.removeAllChangeListeners();
    }

    render() {
        return (
            <div className="App">
                <div className="PDFViewer-container">
                    <PDFViewer context={context} pdfURL={this.state.pdfURL}/>
                </div>
                <div className="MarkdownEditor-container">
                    <MarkdownToolbar context={context}/>
                    <MarkdownEditor context={context}/>
                </div>
            </div>
        )
    }
}

module.exports = function () {
    React.render(<App/>, document.body);
};

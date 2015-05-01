// LICENSE : MIT
"use strict";
var React = require("react");
var path = require("path");
var viewerHTML = path.join(__dirname, "..", "..", "pdfjs/web/viewer.html");
export default class PDFViewer extends React.Component {
    componentDidMount() {
        //this.iframe = React.findDOMNode(this);
        //this.iframe.addEventListener("load", this._onPDFLoad.bind(this));
    }

    // TODO: https://github.com/mozilla/pdf.js/pull/5915
    _onPDFLoad(event) {
    }

    componentWillUnmount() {
    }

    render() {
        var pdfURL = this.props.pdfURL;
        var filePath = this.props.context.editorStore.getFilePath();
        var query = "";
        if (pdfURL && filePath) {
            var dirPath = path.dirname(filePath);
            query = "?file=" + path.resolve(dirPath, pdfURL);
        } else if (pdfURL) {
            query = "?file=" + pdfURL;
        }
        return (
            <iframe className="PDFViewer" src={viewerHTML + query}></iframe>
        )
    }
}
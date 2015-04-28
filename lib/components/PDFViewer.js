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
        var query = "";
        if (pdfURL) {
            query = "?file=" + pdfURL;
        }
        return (
            <iframe className="PDFViewer" src={viewerHTML + query}></iframe>
        )
    }
}
// LICENSE : MIT
"use strict";
var React = require("react");
var path = require("path");
var viewerHTML = path.join(__dirname, "..", "..", "pdfjs/web/viewer.html");
export default class PDFViewer extends React.Component {
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
"use strict";
var React = require("react");
export default class MarkdownToolbar extends React.Component {
    onQuote() {
        // pdf.js instance
        var contentWindow = document.querySelector(".PDFViewer").contentWindow;
        var pdfViewerApplication = contentWindow.PDFViewerApplication;
        var pdfViewer = pdfViewerApplication.pdfViewer;
        var currentPage = pdfViewer.currentPageNumber;
        var href = pdfViewerApplication.url + "#page=" + currentPage;
        var selectedText = contentWindow.getSelection();
        var text = `## Page ${currentPage}
> ${href}
> ${selectedText}
`;
        var { context } = this.props;
        context.editorAction.quote(text);
    }

    onOpen() {
        var { context } = this.props;
        context.editorAction.openFile();
    }

    onSave() {
        var { editorStore,editorAction } = this.props.context;
        var filePath = editorStore.getFilePath();
        editorAction.saveAsFile(filePath);
    }

    render() {
        return (
            <div className="MemoToolbar">
                <button onClick={this.onQuote.bind(this)}>Quote</button>
                <button onClick={this.onOpen.bind(this)}>Open</button>
                <button onClick={this.onSave.bind(this)}>Save</button>
            </div>
        )
    }
}
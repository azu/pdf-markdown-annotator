"use strict";
var React = require("react");
export default class MarkdownToolbar extends React.Component {
    onQuote() {
        // pdf.js instance
        var contentWindow = document.querySelector(".PDFViewer").contentWindow;
        var pdfViewerApplication = contentWindow.PDFViewerApplication;
        var pdfViewer = pdfViewerApplication.pdfViewer;
        var currentPage = pdfViewer.currentPageNumber;
        var href = pdfViewerApplication.url + pdfViewer.location.pdfOpenParams;
        var selectedText = contentWindow.getSelection();
        var text = `## [Page ${currentPage}](${href})
> ${selectedText}

`;
        var { context } = this.props;
        context.editorAction.quote(text);
    }

    onCreateNewFile() {
        var { context } = this.props;
        context.editorAction.createNewFile();
    }
    
    onOpen() {
        var { context } = this.props;
        context.editorAction.openFile();
    }

    onSave() {
        var { editorStore, editorAction } = this.props.context;
        var filePath = editorStore.getFilePath();
        editorAction.saveAsFile(filePath);
    }

    render() {
        return (
            <div className="MemoToolbar">
                <button onClick={this.onQuote.bind(this)}><span className="fa fa-quote-right">Quote</span></button>
                <button onClick={this.onCreateNewFile.bind(this)}><span className="fa fa-plus">New File</span></button>
                <button onClick={this.onOpen.bind(this)}><span className="fa fa-folder-open-o">Open</span></button>
                <button onClick={this.onSave.bind(this)}><span className="fa fa fa-floppy-o">Save</span></button>
            </div>
        )
    }
}
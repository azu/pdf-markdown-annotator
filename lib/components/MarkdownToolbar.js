"use strict";
var React = require("react");
var path = require("path");
export default class MarkdownToolbar extends React.Component {
    onQuote() {
        // pdf.js instance
        var contentWindow = document.querySelector(".PDFViewer").contentWindow;
        var pdfViewerApplication = contentWindow.PDFViewerApplication;
        var pdfViewer = pdfViewerApplication.pdfViewer;
        var currentPage = pdfViewer.currentPageNumber;
        var url = pdfViewerApplication.url;
        var urlReg = /(^https?:|^file:)/;
        var { context } = this.props;
        if (!urlReg.test(url)) {
            var markdownFilePath = context.editorStore.getFilePath();
            if (markdownFilePath) {
                url = path.relative(path.dirname(markdownFilePath), url);
            }
        }
        var href = url + pdfViewer.location.pdfOpenParams;
        var selectedText = contentWindow.getSelection();
        var text = `## [Page ${currentPage}](${href})
> ${selectedText}

`;
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

    onChangeMode(isReadonly) {
        var { editorAction } = this.props.context;
        editorAction.changeReadonly(isReadonly);
    }

    render() {
        var { editorStore } = this.props.context;
        if (editorStore.isReadonly()) {
            return (
                <div className="MemoToolbar">
                    <button onClick={this.onChangeMode.bind(this,false)}><span className="fa fa-pencil">Editor</span>
                    </button>
                </div>
            )
        } else {
            return (
                <div className="MemoToolbar">
                    <button onClick={this.onQuote.bind(this)}><span className="fa fa-quote-right">Quote</span></button>
                    <button onClick={this.onCreateNewFile.bind(this)}><span className="fa fa-plus">New File</span>
                    </button>
                    <button onClick={this.onOpen.bind(this)}><span className="fa fa-folder-open-o">Open</span></button>
                    <button onClick={this.onSave.bind(this)}><span className="fa fa-floppy-o">Save</span></button>
                    <button onClick={this.onChangeMode.bind(this,true)}><span className="fa fa-eye">Preview</span>
                    </button>
                </div>
            )
        }
    }
}
// LICENSE : MIT
"use strict";
var React = require("react");
var PDFViewer = require("./components/PDFViewer");
class App extends React.Component {
    render() {
        return (
            <div className="PDFViewer-container">
                <PDFViewer />
            </div>
        )
    }
}
React.render(<App/>, document.body);
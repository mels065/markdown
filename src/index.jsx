import React from "react";
import {render} from "react-dom";
import MarkdownInput from "./components/MarkdownInput.jsx";
import MarkdownViewer from "./components/MarkdownViewer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  handleChange(event) {
    this.setState( {
      input: event.target.value
    } );
  }
  render() {
    return (
      <div className="row">
        <MarkdownInput handleChange={this.handleChange.bind(this)} />
        <MarkdownViewer input={this.state.input} />
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));

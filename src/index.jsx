import React from "react";
import {render} from "react-dom";
import MarkdownInput from "./components/MarkdownInput.jsx";

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
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));

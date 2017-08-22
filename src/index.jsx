import React from "react";
import {render} from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div class="row"></div>
    );
  }
}

render(<App />, document.getElementById("main"));

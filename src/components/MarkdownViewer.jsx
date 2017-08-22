import React from 'react';
import marked from 'marked';

class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let markdown = marked(this.props.input);
    return (
      <div className="col-xs-6">
        <div className="markdown-viewer">{markdown}</div>
      </div>
    );
  }
}

export default MarkdownViewer;

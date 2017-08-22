import React from 'react';

class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xs-6">
        <div className="markdown-viewer">{this.props.markdown}</div>
      </div>
    );
  }
}

export default MarkdownViewer;

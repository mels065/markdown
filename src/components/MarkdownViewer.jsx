import React from 'react';
import marked from 'marked';

class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup() {
    return {__html: marked(this.props.input)};
  }

  render() {
    return (
      <div className="col-xs-6">
        <div className="markdown-viewer"
             dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}

export default MarkdownViewer;

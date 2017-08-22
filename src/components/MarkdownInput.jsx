import React from 'react';

const MarkdownInput = (props) => (
  <div className="col-6">
    <textarea className="markdown-input" onChange={props.handleChange}></textarea>
  </div>
);

export default MarkdownInput;

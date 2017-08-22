import React from 'react';

const MarkdownInput = (props) => (
  <div className="col-xs-6">
    <textarea onChange={props.handleChange}></textarea>
  </div>
);

export default MarkdownInput;

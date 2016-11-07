'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

const FileView = ({
  file,
  onChange,
  onAdd,
  onRemove
}) => (
  <div className="file-view">
    <Toolbar
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <textarea
      className="file-view__text"
      placeholder="Type some text here..."
      value={file}
      onChange={onChange}
    />
  </div>
);

module.exports = FileView;

'use strict'

import React from 'react';
import Toolbar from './Toolbar';

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

export default FileView;

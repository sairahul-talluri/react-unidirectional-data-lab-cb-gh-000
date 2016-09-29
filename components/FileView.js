'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

class FileView extends React.Component {
  render() {
    const {
      file,
      onChange,
      onAdd,
      onRemove,
    } = this.props;

    return (
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
  }
}

module.exports = FileView;

'use strict'

import React from 'react';
import Sidebar from './Sidebar';
import FileView from './FileView';
import Toolbar from './Toolbar';

import fileStore from '../stores/fileStore';
import actions from '../actions';

export default class App extends React.Component {
  componentDidMount() {
    // TODO
  }
  componentWillUnmount() {
    // TODO
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    // TODO Dispatch action
  }
  handleSelect(selectedFileIndex) {
    // TODO Update selectedFileIndex state
  }
  handleAdd(ev) {
    ev.preventDefault();
    // TODO Dispatch action
  }
  handleRemove(ev) {
    ev.preventDefault()
    // TODO Dispatch action
  }
  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];

    return (
      <div className="app">
        <Sidebar
          files={files}
          selectedFileIndex={selectedFileIndex}
          onSelect={this.handleSelect}
        />
        <FileView
          file={file}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

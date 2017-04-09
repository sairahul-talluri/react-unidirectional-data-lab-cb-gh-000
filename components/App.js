'use strict'

import React from 'react';
import Sidebar from './Sidebar';
import FileView from './FileView';

import fileStore from '../stores/fileStore';
import actions from '../actions';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.removeListener = fileStore.addListener((files) => {
      this.setState({ files });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(selectedFileIndex, ev.target.value)
  }

  handleSelect(selectedFileIndex) {
    this.setState({ selectedFileIndex });
  }

  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile();
  }

  handleRemove(ev) {
    ev.preventDefault();
    const { selectedFileIndex } = this.state;
    actions.removeFile(selectedFileIndex);
    this.setState({ selectedFileIndex: 0 });
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

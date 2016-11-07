'use strict';

const Store = require('./Store');

class FileStore extends Store {
  updateFile(index, file) {
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }

  addFile() {
    const files = this.getState().concat('');
    this.setState(files);
  }

  removeFile(index) {
    if (this.state.length === 1) {
      return this.setState(['']);
    }

    const files = this.getState().slice()
    files.splice(index, 1);
    this.setState(files);
  }
}

module.exports = new FileStore(['']);

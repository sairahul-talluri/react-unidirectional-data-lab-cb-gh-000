'use strict';

import fileStore from '../stores/fileStore';

// Currently those actions are simply updating the fileStore directly, in the
// future we're going to decouple actions and stores using a so-called
// "dispatcher".

// For now it's important to keep in mind that those actions are being used in
// order to "update" state in some form or another.

const addFile = () => {
  fileStore.addFile();
};

const removeFile = (index) => {
  fileStore.removeFile(index);
};

const updateFile = (index, file) => {
  fileStore.updateFile(index, file);
};

export default {
  addFile,
  removeFile,
  updateFile,
};

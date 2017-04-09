'use strict';

import fileStore from '../stores/fileStore';
const FileStore = fileStore.constructor;
import Store from '../stores/Store';

describe('fileStore', function() {
  it('should be an object', function() {
    expect(typeof fileStore).toBe('object');
  });

  it('should be an instance of FileStore', function() {
    expect(fileStore.constructor.name).toBe('FileStore');
  });

  it('should be an instance of Store', function() {
    expect(fileStore instanceof Store).toBe(true);
  });

  it('should store files as an array', function() {
    expect(fileStore.getState().constructor).toBe(Array);
  });

  it('should by default contain at least one file', function() {
    expect(fileStore.getState().length).toBeGreaterThan(0);
  });

  it('should store files as an array of string', function() {
    fileStore.getState().forEach((file) => {
      expect(typeof file).toBe('string');
    });
  });

  describe('#updateFile', function() {
    it('should update the file at the passed in index', function() {
      const instance = new FileStore(['hello', 'world']);
      const prevState = instance.getState();
      expect(prevState).toEqual(['hello', 'world']);

      instance.updateFile(1, 'mars');
      const nextState = instance.getState();
      expect(nextState).toEqual(['hello', 'mars']);
    });

    it('should not mutate store state, but create a new copy', function() {
      const instance = new FileStore(['hello', 'world']);
      const prevState = instance.getState();
      instance.updateFile(1, 'mars');
      const nextState = instance.getState();

      expect(nextState).toNotBe(prevState);
    });
  });

  describe('#addFile', function() {
    it('should append empty string to store', function() {
      const instance = new FileStore([]);
      instance.addFile();
      instance.addFile();
      expect(instance.getState()).toEqual(['', '']);
    });

    it('should not mutate store state, but create a new copy', function() {
      const instance = new FileStore([]);
      const prevState = instance.getState();
      instance.addFile();
      expect(instance.getState()).toNotBe(prevState);
    });
  });

  describe('#removeFile', function() {
    context('when there is only one file left', function() {
      it('should empty remaining file', function() {
        const instance = new FileStore(['only file']);
        instance.removeFile();
        expect(instance.getState()).toEqual(['']);
      });
    });

    it('it should remove file at specified index', function() {
      const instance = new FileStore(['first', 'second', 'third']);
      instance.removeFile(2);
      expect(instance.getState()).toEqual(['first', 'second']);
      instance.removeFile(0);
      expect(instance.getState()).toEqual(['second']);
    });
  });
});

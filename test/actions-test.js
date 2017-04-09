'use strict';

import actions from '../actions';
import fileStore from '../stores/fileStore';

describe('actions', function() {
  afterEach(function() {
    expect.restoreSpies();
  });

  describe('#addFile', function() {
    it('should be a function', function() {
      expect(typeof actions.addFile).toBe('function');
    });

    it('should call addFile on fileStore', function() {
      const spy = expect.spyOn(fileStore, 'addFile');
      actions.addFile();
      expect(spy).toHaveBeenCalled();
      spy.restore();
    });
  });

  describe('#removeFile', function() {
    it('should be a function', function() {
      expect(typeof actions.removeFile).toBe('function');
    });

    it('should call removeFile on fileStore', function() {
      const spy = expect.spyOn(fileStore, 'removeFile');
      const index = 5;
      actions.removeFile(index);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(index);
      spy.restore();
    });
  });

  describe('#updateFile', function() {
    it('should be a function', function() {
      expect(typeof actions.updateFile).toBe('function');
    });

    it('should call updateFile on fileStore', function() {
      const spy = expect.spyOn(fileStore, 'updateFile');
      actions.updateFile(0, 'update');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(0, 'update');
      spy.restore();
    });
  });
});

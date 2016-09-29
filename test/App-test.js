'use strict';

const React = require('react');
const { shallow, mount } = require('enzyme');
const sinon = require('sinon');

const fileStore = require('../stores/fileStore');
const App = require('../components/App');

describe('<App />', function() {
  const sandbox = sinon.sandbox.create();

  beforeEach(function() {
    sandbox.stub(fileStore, 'addListener');
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('when component did mount', function() {
    it('should add listener', function() {
      const wrapper = mount(<App />);
      sinon.assert.calledOnce(fileStore.addListener);
      sinon.assert.calledWithMatch(fileStore.addListener, sinon.match.func);
    });
  });

  describe('when fileStore updates', function() {
    it('should update .files state', function() {
      const wrapper = mount(<App />);
      const listener = fileStore.addListener.getCall(0).args[0];
      const state = ['file 1', 'file 2', 'file 3'];
      listener(state);
      expect(wrapper.state('files')).toBe(state);
    });
  });

  describe('when component will unmount', function () {
    it('should remove the registered listener', function () {
      const removeListener = sinon.spy();
      fileStore.addListener.returns(removeListener);

      const wrapper = mount(<App />);
      sinon.assert.notCalled(removeListener);

      wrapper.unmount();
      sinon.assert.calledOnce(removeListener);
    });
  });

  describe('state.selectedFileIndex', function() {
    it('should be 0', function() {
      const wrapper = shallow(<App />);
      expect(wrapper.state('selectedFileIndex')).toBe(0);
    });
  });
});

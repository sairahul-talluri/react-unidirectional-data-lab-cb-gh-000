'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import FileView from '../components/FileView';
import Toolbar from '../components/Toolbar';

describe('<FileView />', function() {
  it('should be a div', function() {
    const wrapper = shallow(<FileView />);
    expect(wrapper.type()).toBe('div');
  });

  it('should have class "file-view"', function() {
    const wrapper = shallow(<FileView />);
    expect(wrapper.hasClass('file-view')).toBe(true);
  });

  it('should contain <Toolbar />', function() {
    const wrapper = shallow(<FileView />);
    expect(wrapper.childAt(0).type()).toBe(Toolbar);
  });

  it('should contain <textarea />', function() {
    const wrapper = shallow(<FileView />);
    expect(wrapper.childAt(1).type()).toBe('textarea');
    expect(wrapper.childAt(1).hasClass('file-view__text')).toBe(true);
  });

  it('should pass file prop as value to <textarea />', function() {
    const file = 'some file';
    const wrapper = shallow(<FileView file={file} />);
    expect(wrapper.childAt(1).prop('value')).toBe(file);
  });

  it('should add onChange handler to <textarea />', function() {
    const onChange = sinon.spy();
    const wrapper = shallow(<FileView onChange={onChange} />);
    wrapper.find('textarea').simulate('change', 'some edit');
    sinon.assert.calledWith(onChange, 'some edit');
  });

  it('should add onAdd handler to <Toolbar />', function() {
    const onAdd = sinon.spy();
    const wrapper = shallow(<FileView onAdd={onAdd} />);
    wrapper.find(Toolbar).prop('onAdd')('something to add');
    sinon.assert.calledWith(onAdd, 'something to add');
  });

  it('should add onRemove handler to <Toolbar />', function() {
    const onRemove = sinon.spy();
    const wrapper = shallow(<FileView onRemove={onRemove} />);
    wrapper.find(Toolbar).prop('onRemove')();
    sinon.assert.calledWith(onRemove);
  });
});

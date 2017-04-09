'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Sidebar from '../components/Sidebar';

describe('<Sidebar />', function() {
  context('when files prop is an empty array', function() {
    it('should render empty list', function() {
      const wrapper = shallow(<Sidebar files={[]} />);
      expect(wrapper.children().length).toBe(0);
    });
  });

  it('should render ul', function() {
    const wrapper = shallow(<Sidebar files={[]} />);
    expect(wrapper.type()).toBe('ul');
  });

  it('should have class "sidebar', function() {
    const wrapper = shallow(<Sidebar files={[]} />);
    expect(wrapper.hasClass('sidebar')).toBe(true);
  });

  it('should render one SidebarItem per file', function() {
    const files = ['first file', 'second file'];
    const wrapper = shallow(<Sidebar files={files} />);
    expect(wrapper.children().length).toBe(2);
    expect(wrapper.childAt(0).prop('file')).toBe(files[0]);
    expect(wrapper.childAt(1).prop('file')).toBe(files[1]);
  });

  it('should pass isSelected to selected <SidebarItem />', function() {
    const files = ['first file', 'second file', 'third file'];
    const wrapper = shallow(<Sidebar files={files} selectedFileIndex={1} />);
    expect(wrapper.childAt(0).prop('isSelected')).toBe(false);
    expect(wrapper.childAt(1).prop('isSelected')).toBe(true);
    expect(wrapper.childAt(2).prop('isSelected')).toBe(false);
  });

  context('when clicking a <SidebarItem />', function() {
    it('should preventDefault and call props.onSelect', function() {
      const onSelect = sinon.spy();
      const wrapper = shallow(<Sidebar files={['first file']} onSelect={onSelect} />);
      const onClick = wrapper.childAt(0).prop('onClick');
      const ev = {
        preventDefault: sinon.spy(),
      };
      onClick(ev);
      sinon.assert.calledOnce(ev.preventDefault);
      sinon.assert.calledOnce(onSelect);
      sinon.assert.calledWith(onSelect, 0);
    });
  });
});

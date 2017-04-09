'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

const SidebarItem = require('../components/SidebarItem');

describe('<SidebarItem />', function() {
  it('should render li', function() {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper.type()).toBe('li');
  });

  it('should have "sidebar__item" class', function() {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper.hasClass('sidebar__item')).toBe(true);
  });

  it('should contain a.sidebar__link', function() {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper.childAt(0).type()).toBe('a');
    expect(wrapper.childAt(0).hasClass('sidebar__link')).toBe(true);
  });

  context('when isSelected prop is true', function() {
    it('should have "sidebar__item--selected" class', function() {
      const wrapper = shallow(<SidebarItem isSelected />);
      expect(wrapper.hasClass('sidebar__item--selected')).toBe(true);
    });
  });

  context('when isSelected prop is false', function() {
    it('should not have "sidebar__item--selected" class', function() {
      const wrapper = shallow(<SidebarItem />);
      expect(wrapper.hasClass('sidebar__item--selected')).toBe(false);
    });
  });

  context('when li.sidebar__item > a.sidebar__link is clicked', function() {
    it('should call onClick prop handler', function() {
      const onClick = sinon.spy();
      const wrapper = shallow(<SidebarItem onClick={onClick} />);
      wrapper.find('a.sidebar__link').simulate('click');
      sinon.assert.calledOnce(onClick);
    });
  });

  it('should show first line of file in li.sidebar__item > a.sidebar__link', function() {
    const file = 'first line\nsecond line';
    const wrapper = shallow(<SidebarItem file={file} />);
    expect(wrapper.find('a.sidebar__link').text()).toBe('first line');
  });

  context('when file is empty', function() {
    it('should show untitled placeholder in li.sidebar__item > a.sidebar__link > em', function() {
      const wrapper = shallow(<SidebarItem file={''} />);
      expect(wrapper.find('a.sidebar__link > em').text()).toBe('Untitled');
    });
  });
});

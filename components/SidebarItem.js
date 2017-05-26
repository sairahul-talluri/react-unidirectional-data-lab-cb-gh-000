'use strict'

import React from 'react';
import classNames from 'classnames';

// Find first non-empty line and use as title.
const getTitle = file =>
  file.split('\n').find(line => line.length);

const SidebarItem = ({ file = '', isSelected, onClick }) => (
  <li className={classNames('sidebar__item', {
    'sidebar__item--selected': isSelected
  })}>
    <a href='#' onClick={onClick} className='sidebar__link'>
      {getTitle(file) || <em>Untitled</em>}
    </a>
  </li>
);

export default SidebarItem;

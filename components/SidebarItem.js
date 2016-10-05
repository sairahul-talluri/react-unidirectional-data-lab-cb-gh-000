'use strict'

const React = require('react');
const classNames = require('classnames');

// Find first non-empty line and use as title.
const getTitle = file =>
  file.split('\n').find(line => line.length);

class SidebarItem extends React.Component {
  render() {
    const { file = '', isSelected, onClick } = this.props;
    const title = getTitle(file);

    return (
      <li className={classNames('sidebar__item', {
        'sidebar__item--selected': isSelected
      })}>
        <a href='#' onClick={onClick} className='sidebar__link'>
          {title || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;

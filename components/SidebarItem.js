'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const { file = '', isSelected, onClick } = this.props;
    const title = SidebarItem.getTitle(file);

    return (
      <li className={classNames('sidebar__item', {
        'sidebar__item--selected': isSelected
      })}>
        <a href='#' onClick={onClick} className='sidebar__link'>
          {title ? title : <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;

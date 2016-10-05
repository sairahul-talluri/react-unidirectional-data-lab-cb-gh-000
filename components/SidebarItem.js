'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    return (
      <li>
        <a>
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;

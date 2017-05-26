'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index)
  }

  render() {
    const { files, selectedFileIndex } = this.props;

    return (
      <ul className="sidebar">
        {
          files.map((file, i) => (
            <SidebarItem
              isSelected={selectedFileIndex === i}
              key={i}
              file={file}
              onClick={this.handleClick.bind(null, i)}
            />
          ))
        }

      </ul>
    );
  }
}

'use strict'

const React = require('react');

class Toolbar extends React.Component {
  render() {
    return (
      <nav className="toolbar">
        <button onClick={this.props.onAdd}>+ Add note</button>
        <button onClick={this.props.onRemove}>Delete note</button>
      </nav>
    );
  }
}

module.exports = Toolbar;

'use strict'

const React = require('react');

class Toolbar extends React.Component {
  render() {
    return (
      <nav>
        <button>+ Add note</button>
        <button>Delete note</button>
      </nav>
    );
  }
}

module.exports = Toolbar;

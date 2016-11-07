'use strict'

const React = require('react');

const Toolbar = ({ onAdd, onRemove }) => (
  <nav className="toolbar">
    <button onClick={onAdd}>+ Add note</button>
    <button onClick={onRemove}>Delete note</button>

  </nav>
);

module.exports = Toolbar;

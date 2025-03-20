import React from 'react';
import HighlightIcon from '@mui/icons-material/Highlight';
import './Header.css'; // Import the CSS file

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <HighlightIcon className="header-icon" />
        ToDoList
      </h1>
    </header>
  );
}
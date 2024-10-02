import React from 'react';

const Header = ({message}) => {
  return (
    <div>
      <h1>My React App</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default Header;
import React from 'react';

const Navbar = (props) => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <div id="navbar-calender-container">
          <i class="bx bx-left-arrow-circle"></i>
          <div id="navbar-calender">
            <h1>MAR 2022</h1>
            <h2>Enter a note...</h2>
          </div>
          <i class="bx bx-right-arrow-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sidenav';
import Navbar from './navbar';
import MainContent from './main-content';

const App = () => {
  return (
    <div id="app-container">
      <SideNav />
      <div id="sub-app-container">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
});

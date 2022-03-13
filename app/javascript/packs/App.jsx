import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sidenav';
import Navbar from './navbar';
import MainContent from './main-content';
import SideInfo from './side-info';

const App = () => {
  return (
    <div id="app-container">
      <SideNav />
      <div id="sub-app-container">
        <Navbar />
        <MainContent />
      </div>
      <SideInfo />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
});

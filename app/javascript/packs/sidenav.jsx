import React, { useState } from 'react';
import SideNavBudget from './sidenav-budget';
import SideNavLinks from './sidenav-tabs';

const SideNav = (props) => {
  const [accountOpen, setAccountOpen] = useState(true);
  const openAccount = () => setAccountOpen(!accountOpen);

  return (
    <div id="side-nav-container">
      <div id="side-nav">
        <div id="side-nav-user-info-container">
          <div id="side-nav-user-info">
            <h1>Joseph Felicidario</h1>
            <h2>josephflec@gmail.com</h2>
          </div>
          <button onClick={openAccount}>
            {accountOpen ? (
              <i className="bx bx-chevron-up"></i>
            ) : (
              <i className="bx bx-chevron-down"></i>
            )}
          </button>
        </div>
        {accountOpen ? (
          <div className="account-container ">
            <SideNavLinks />
            <SideNavBudget />
          </div>
        ) : null}

        <div id="add-account-container">
          <div id="add-account">
            <i className="bx bx-plus-circle"></i>
            <p>Add Account</p>
          </div>
        </div>
      </div>
      <div className="sidenav-footer">
        <i className="bx bx-like"></i>
        <p>Enjoying Your Stay? Tell a Friend!</p>
      </div>
    </div>
  );
};

export default SideNav;

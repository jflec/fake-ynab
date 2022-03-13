import React, { useState } from 'react';

const SideNavLinks = () => {
  const [tabOpen, setTabOpen] = useState(0);
  const changeTab = (tabNumber) => setTabOpen(tabNumber);

  return (
    <>
      {tabOpen == 0 ? (
        <button className="side-nav-links side-nav-active">
          <i className="bx bx-wallet"></i>
          <p>Budget</p>
        </button>
      ) : (
        <button onClick={() => changeTab(0)} className="side-nav-links">
          <i className="bx bx-wallet"></i>
          <p>Budget</p>
        </button>
      )}

      {tabOpen == 1 ? (
        <button className="side-nav-links side-nav-active">
          <i className="bx bx-bar-chart-alt-2"></i>
          <p>Report</p>
        </button>
      ) : (
        <button onClick={() => changeTab(1)} className="side-nav-links">
          <i className="bx bx-bar-chart-alt-2"></i>
          <p>Report</p>
        </button>
      )}

      {tabOpen == 2 ? (
        <button className="side-nav-links side-nav-active">
          <i className="bx bx-group"></i>
          <p>All Accounts</p>
        </button>
      ) : (
        <button onClick={() => changeTab(2)} className="side-nav-links">
          <i className="bx bx-group"></i>
          <p>All Accounts</p>
        </button>
      )}
    </>
  );
};

export default SideNavLinks;

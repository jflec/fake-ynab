import React from 'react';

const SideInfo = () => {
  return (
    <div id="side-info-container">
      <div id="side-info">
        <div id="total-budget">
          <div className="sub-budget-container">
            <p>TOTAL BUDGETED</p>
            <h1>$1,169.31</h1>
          </div>
          <div className="sub-budget-container">
            <p>TOTAL ACTIVITY</p>
            <h1>$1,169.31</h1>
          </div>
          <div className="sub-budget-container">
            <p>TOTAL AVAILABLE</p>
            <h1>$1,169.31</h1>
          </div>
          <div className="sub-budget-container">
            <p>TOTAL INFLOWS</p>
            <h1>$1,169.31</h1>
          </div>
        </div>
        <div id="quick-budget-container">
          <p className="quick-budget-header">QUICK BUDGET</p>
          <div className="sub-quick-budget-container">
            <p>Underfunded:</p>
            <h1>$,1169.31</h1>
          </div>
          <div className="sub-quick-budget-container">
            <p>Budgeted Last Month:</p>
            <h1>$,1169.31</h1>
          </div>
          <div className="sub-quick-budget-container">
            <p>Spent Last Month:</p>
            <h1>$,1169.31</h1>
          </div>
          <div className="sub-quick-budget-container">
            <p>Average Budgeted:</p>
            <h1>$,1169.31</h1>
          </div>
          <div className="sub-quick-budget-container">
            <p>Average Spent:</p>
            <h1>$,1169.31</h1>
          </div>
          <div className="sub-quick-budget-container tools-top">
            <p>Set Available Amounts to $0.00</p>
          </div>
          <div className="sub-quick-budget-container tools-bottom">
            <h1>Reset Budgeted Amounts</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;

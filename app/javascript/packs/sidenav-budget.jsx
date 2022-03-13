import React, { useState } from 'react';

const SideNavBudget = (props) => {
  const [budgetDropdown, setBudgetDropdownOpen] = useState(true);
  const openBudgetDropdown = () => setBudgetDropdownOpen(!budgetDropdown);
  return (
    <div id="side-nav-budget-container">
      <div className="side-nav-budget">
        <button onClick={openBudgetDropdown} className="budget-header">
          <div className="budget-header-icon">
            {budgetDropdown ? (
              <i className="bx bx-chevron-up"></i>
            ) : (
              <i className="bx bx-chevron-down"></i>
            )}
            <p>BUDGET</p>
          </div>
          <p>$10,000.00</p>
        </button>
        {budgetDropdown ? (
          <div className="budget-item-container">
            <div className="budget-item">
              <p>Checking Demo</p>
              <p>$10,000.00</p>
            </div>
            <div className="budget-item">
              <p>Checking Demo</p>
              <p>$10,000.00</p>
            </div>
            <div className="budget-item">
              <p>Checking Demo</p>
              <p>$10,000.00</p>
            </div>
            <div className="budget-item">
              <p>Checking Demo</p>
              <p>$10,000.00</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideNavBudget;

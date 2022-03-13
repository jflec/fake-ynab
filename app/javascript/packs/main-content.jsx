import React from 'react';

const MainContent = (props) => {
  const categories = [
    {
      name: 'Obligiations',
      sub_categories: [
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
      ],
    },
    {
      name: 'Obligiations',
      sub_categories: [
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
      ],
    },
    {
      name: 'Obligiations',
      sub_categories: [
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
      ],
    },
    {
      name: 'Obligiations',
      sub_categories: [
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
      ],
    },
    {
      name: 'Obligiations',
      sub_categories: [
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
      ],
    },
    {
      name: 'Obligiations',
      sub_categories: [
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
        {
          category_name: 'Rent/Mortgage',
          budgeted: 100,
          activity: 100,
          available: 100,
        },
      ],
    },
  ];

  return (
    <div id="main-content-container">
      <div id="main-content">
        <div id="table-header">
          <div id="create-category">
            <i className="bx bx-plus-circle"></i>
            <p>Create Category</p>
          </div>
          <div id="table-undo-redo">
            <div className="undo-redo">
              <i className="bx bx-undo"></i>
              <p>Undo</p>
            </div>
            <div className="undo-redo">
              <i className="bx bx-redo"></i>
              <p>Redo</p>
            </div>
          </div>
        </div>
        <table id="main-content-table">
          <tr className="main-content-header-container">
            <th className="main-content-header">CATEGORY</th>
            <th className="main-content-header">BUDGETED</th>
            <th className="main-content-header">ACTIVITY</th>
            <th className="main-content-header">AVAILABLE</th>
          </tr>

          {categories.map((category, key) => {
            return (
              <tbody>
                <tr className="category-header">
                  <td>{category.name}</td>
                  <td>400</td>
                  <td>400</td>
                  <td>400</td>
                </tr>
                {category.sub_categories.map(
                  ({ category_name, budgeted, activity, available }, key) => {
                    return (
                      <tr className="category-item">
                        <td>{category_name}</td>
                        <td>{budgeted}</td>
                        <td>{activity}</td>
                        <td>{available}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MainContent;

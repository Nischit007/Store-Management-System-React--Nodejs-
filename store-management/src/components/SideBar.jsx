import React from 'react';

export const SideBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "250px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Stock")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Stock" ? "active" : ""}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Stock
          </a>
        </li>
        <li onClick={() => setSelectedTab("ManageItems")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "ManageItems" ? "active" : ""}`}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Manage Items
          </a>
        </li>
        <li onClick={() => setSelectedTab("Edit")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Edit" ? "active" : ""}`}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Edit
          </a>
        </li>
      </ul>
      <hr />
      
    </div>
  );
};

export default SideBar;

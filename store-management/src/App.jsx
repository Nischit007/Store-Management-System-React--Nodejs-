import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StockManagementProvider from './Store/Stock-Management-store';
import { Stock } from './components/Stock';
import ManageStock from './components/ManageStock';
import EditStock from './components/EditStock';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState("Stock");

  let componentToRender;
  if (selectedTab === "Stock") {
    componentToRender = <Stock />;
  } else if(selectedTab==="ManageItems"){
    componentToRender = <ManageStock />;
  }else{
    componentToRender=<EditStock/>
  }

  return (
    <>
      <StockManagementProvider>
        <div className="app-container">
          <SideBar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className="content">
            <NavBar />
            {componentToRender}
          </div>
        </div>
      </StockManagementProvider>
    </>
  );
}

export default App;

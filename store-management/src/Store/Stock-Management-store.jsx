import React, { createContext, useEffect, useReducer, useState } from "react";

// Create a context with default values
export const StockList = createContext({
  stockList: [],
  addStock: () => {},
  deleteStock: () => {},
  editStock: () => {},
});

// Reducer function to handle stock list actions
const stockListReducer = (currStockList, action) => {
  switch (action.type) {
    case "SET_STOCKS":
      return action.payload;
    case "ADD_STOCK":
      return [...currStockList, action.payload];
    case "DELETE_STOCK":
      return currStockList.filter(stock => stock.Items !== action.payload.Items);
    case "EDIT_STOCK":
      return currStockList.map(stock =>
        stock.Items === action.payload.Items
          ? { ...stock, ...action.payload }
          : stock
      );
    default:
      return currStockList;
  }
};
// Stock Management Provider Component
export const StockManagementProvider = ({ children }) => {
  const [stockList, dispatchStockList] = useReducer(stockListReducer,DEFAULT_ITEM);

  // Fetch data from the backend and initialize the state
  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then(res => res.json())
      .then(data => dispatchStockList({ type: "SET_STOCKS", payload: data }))
      .catch(err => console.error('Error fetching stocks:', err));
  }, []);

  // Function to add a new stock
  const addStock = (Items, Quantity, Unit, OpeningStock, TotalStockIn, TotalStockOut, RemainingStock) => {
    dispatchStockList({
      type: "ADD_STOCK",
      payload: {
        id: Date.now(),
        Items,
        Quantity,
        Unit,
        OpeningStock,
        TotalStockIn,
        TotalStockOut,
        RemainingStock,
      },
    });
  };

  // Function to delete a stock by id
  const deleteStock = (Items) => {
    dispatchStockList({
      type: "DELETE_STOCK",
      payload: { Items },
    });
  };

  // Function to edit an existing stock
  const editStock = (Items, Quantity, Unit,OpeningStock, TotalStockIn, TotalStockOut, RemainingStock) => {
    dispatchStockList({
      type: "EDIT_STOCK",
      payload: { Items, Unit,Quantity, OpeningStock, TotalStockIn, TotalStockOut, RemainingStock },
    });
  };



  return (
    <StockList.Provider value={{ stockList, addStock, deleteStock, editStock }}>
      {children}
    </StockList.Provider>
  );
};

export default StockManagementProvider;


// CREATE Table item(
//   id int PRIMARY KEY AUTO_INCREMENT,

//   Items varchar(100),
//   Quantity varchar(100),
//   Unit varchar(100),
//   OpeningStock varchar(100),
//   TotalStockIn varchar(100),
//   TotalStockOut varchar(100),
//   RemainingStock varchar(100)
  
//   )



let DEFAULT_ITEM=[{
  id:1,

Items:"APPLE",
Quantity:10 ,
Unit :"Catoon",
OpeningStock :100,
TotalStockIn:200,
TotalStockOut:500,
RemainingStock:700,
},
{
id:1,

Items:"ORGANGE",
Quantity:10 ,
Unit :"Catoon",
OpeningStock :100,
TotalStockIn:200,
TotalStockOut:500,
RemainingStock:700,
},
{
id:1,

Items:"BANANA",
Quantity:10 ,
Unit :"Catoon",
OpeningStock :100,
TotalStockIn:200,
TotalStockOut:500,
RemainingStock:700,
}]
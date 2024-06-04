import React, { useContext, useRef } from "react";
import { StockList } from "../Store/Stock-Management-store";

const ManageStock = () => {
  
  const { addStock } = useContext(StockList);
  const Items = useRef();
  const Quantity = useRef();
  const Unit = useRef();
  const OpeningStock = useRef();
  const TotalStockIn = useRef();
  const TotalStockOut = useRef();
  const RemainingStock = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stockItem = Items.current.value;
    const stockQuantity = Quantity.current.value;
    const stockUnit = Unit.current.value;
    const stockOpeningStock = OpeningStock.current.value;
    const stockTotalStockIn = TotalStockIn.current.value;
    const stockTotalStockOut = TotalStockOut.current.value;
    const stockRemainingStock = RemainingStock.current.value;

    addStock(
      stockItem,
      stockQuantity,
      stockUnit,
      stockOpeningStock,
      stockTotalStockIn,
      stockTotalStockOut,
      stockRemainingStock
    );

    // Reset form fields after submission
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit}
            style={{
              width: "900px",
              marginLeft: "-150px",
              border: "2px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <div className="mb-3">
              <label htmlFor="item" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                id="item"
                ref={Items}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  ref={Quantity}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="unit" className="form-label">
                  Unit
                </label>
                <select className="form-select" id="unit" ref={Unit}>
                  <option defaultValue>Select Unit</option>
                  <option value="Catoon">Catoon</option>
                  <option value="Pale">Pale</option>
                  <option value="Jar">Jar</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="openingStock" className="form-label">
                Opening Stock
              </label>
              <input
                type="text"
                className="form-control"
                id="openingStock"
                ref={OpeningStock}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalStockIn" className="form-label">
                Total Stock In
              </label>
              <input
                type="text"
                className="form-control"
                id="totalStockIn"
                ref={TotalStockIn}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalStockOut" className="form-label">
                Total Stock Out
              </label>
              <input
                type="text"
                className="form-control"
                id="totalStockOut"
                ref={TotalStockOut}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="remainingStock" className="form-label">
                Remaining Stock
              </label>
              <input
                type="text"
                className="form-control"
                id="remainingStock"
                ref={RemainingStock}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Stock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageStock;

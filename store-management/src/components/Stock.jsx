import React, { useContext } from "react";
import { StockList } from "../Store/Stock-Management-store";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
export const Stock = () => {
  const { stockList, deleteStock } = useContext(StockList);
  return (
    <div className="container mt-5">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Package/Unit</th>
            <th>Opening Stock</th>
            <th>Total Stock In</th>
            <th>Total Stock Out</th>
            <th>RemainingStock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.Items}</td>
              <td>{stock.Quantity}</td>
              <td>{stock.Unit}</td>
              <td>{stock.OpeningStock}KG</td>
              <td>{stock.TotalStockIn}KG</td>
              <td>{stock.TotalStockOut}KG</td>
              <td>{stock.RemainingStock}KG</td>
              <td>
                <MdModeEdit /> |{" "}
                <MdDelete onClick={() => deleteStock(stock.Items)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Stock;

import React, { useContext, useRef } from 'react';
import { FaSave } from "react-icons/fa";
import { StockList } from "../Store/Stock-Management-store";

export const EditStock = () => {
    const { editStock } = useContext(StockList);

    const Items = useRef();
    const Unit = useRef();
    const Quantity = useRef();
    const OpeningStock = useRef();
    const TotalStockIn = useRef();
    const TotalStockOut = useRef();
    const RemainingStock = useRef();

    const handleSave = async () => {
        const stockItem = Items.current.value;
        const stockQuantity = Quantity.current.value;
        const stockUnit = Unit.current.value;
        const stockOpeningStock = OpeningStock.current.value;
        const stockTotalStockIn = TotalStockIn.current.value;
        const stockTotalStockOut = TotalStockOut.current.value;
        const stockRemainingStock = RemainingStock.current.value;

        const updatedStock = {
            Items: stockItem,
            Quantity: stockQuantity,
            Unit: stockUnit,
            OpeningStock: stockOpeningStock,
            TotalStockIn: stockTotalStockIn,
            TotalStockOut: stockTotalStockOut,
            RemainingStock: stockRemainingStock
        };

        // Call the editStock function from context
        editStock(
            stockItem,
            stockQuantity,
            stockUnit,
            stockOpeningStock,
            stockTotalStockIn,
            stockTotalStockOut,
            stockRemainingStock
        );

        // Make a PUT request to update the stock in the database
        try {
            const response = await fetch(`http://localhost:8000/items/${stockItem}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedStock)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
            }

            const data = await response.json();
            console.log('Stock updated successfully:', data);
        } catch (error) {
            console.error('Error updating stock:', error);
        }
    };

    return (
        <div className="container mt-5">
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Opening Stock</th>
                        <th>Total Stock In</th>
                        <th>Total Stock Out</th>
                        <th>Remaining Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='text' className="form-control" ref={Items} /></td>
                        <td>
                            <select className="form-control" ref={Unit}>
                                <option defaultValue>Select Unit</option>
                                <option value="Catoon">Catoon</option>
                                <option value="Pale">Pale</option>
                                <option value="Jar">Jar</option>
                            </select>
                        </td>
                        <td><input type='number' className="form-control" ref={Quantity} /></td>
                        <td><input type='number' className="form-control" ref={OpeningStock} /></td>
                        <td><input type='number' className="form-control" ref={TotalStockIn} /></td>
                        <td><input type='number' className="form-control" ref={TotalStockOut} /></td>
                        <td><input type='number' className="form-control" ref={RemainingStock} /></td>
                        <td><FaSave onClick={handleSave} style={{ cursor: 'pointer' }} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EditStock;

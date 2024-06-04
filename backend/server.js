const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "items",
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.get('/', (req, res) => {
    return res.json("from backend side");
});

app.get("/items", (req, res) => {
    const sql = "SELECT * FROM item";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(data);
    });
});

app.post("/items", (req, res) => {
    const { Items, Quantity, Unit, OpeningStock, TotalStockIn, TotalStockOut, RemainingStock } = req.body;

    const sql = `
        INSERT INTO item (Items, Quantity, Unit, OpeningStock, TotalStockIn, TotalStockOut, RemainingStock) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [Items, Quantity, Unit, OpeningStock, TotalStockIn, TotalStockOut, RemainingStock], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: "Stock added successfully", result });
    });
});

app.put("/items/:itemName", (req, res) => {
    const itemName = req.params.itemName;
    const {
        Items,
        Quantity,
        Unit,
        OpeningStock,
        TotalStockIn,
        TotalStockOut,
        RemainingStock
    } = req.body;

    const sql = `
        UPDATE item 
        SET 
            Items = ?, 
            Quantity = ?, 
            Unit = ?, 
            OpeningStock = ?, 
            TotalStockIn = ?, 
            TotalStockOut = ?, 
            RemainingStock = ? 
        WHERE Items = ?`;

    db.query(sql, [
        Items,
        Quantity,
        Unit,
        OpeningStock,
        TotalStockIn,
        TotalStockOut,
        RemainingStock,
        itemName
    ], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.json({ message: "Stock updated successfully", result });
    });
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});

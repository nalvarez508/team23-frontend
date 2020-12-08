import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './inventoryList.css';

const InventoryList = () => {
    const items = [
        {name: "Whipped Cream", quantity: "1 puff", sku: "001", available: 550, incoming: 0},
        {name: "Sugar", quantity: "1 gram", sku: "002", available: 984, incoming: 0},
        {name: "Coffee Beans", quantity: "100 grams", sku: "003", available: 1587, incoming: 0},
        {name: "Chocolate Syrup", quantity: "1 oz", sku: "004", available: 58, incoming: 128}
    ]

    const renderItems = (item, index) => {
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.sku}</td>
                <td>{item.available}</td>
                <td>{item.incoming}</td>
            </tr>
        )
    }

    return(
        <div ClassName="InventoryList">
            <header class = "top">
                <table class = "header">
                    <tr>
                        <td class><h1>STIM</h1></td>
                        <td class = "header"><h1>Inventory List</h1></td>
                    </tr>
                </table>
            </header>

            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>SKU</th>
                        <th>Available</th>
                        <th>Incoming</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderItems)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
}

export default InventoryList;
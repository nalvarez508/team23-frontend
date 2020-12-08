import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const InventoryList = () => {
    const items = [
        {name: "Whipped Cream", quantity: "1 puff", sku: "001", available: 550, incoming: 0},
        {name: "Whipped Cream", quantity: "1 puff", sku: "001", available: 550, incoming: 0},
        {name: "Whipped Cream", quantity: "1 puff", sku: "001", available: 550, incoming: 0},
        {name: "Whipped Cream", quantity: "1 puff", sku: "001", available: 550, incoming: 0}
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
            <header>
                <h1><stim>STIM</stim></h1>
                <h1>Inventory List</h1>
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
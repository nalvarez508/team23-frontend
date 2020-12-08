/*import Table from 'react-bootstrap-table'
import React from 'react';

const inventoryList = () => {
    return(
    <Table striped bordered hover>
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
            <tr>
                <td>Whipped Cream</td>
                <td>1 puff</td>
                <td>001</td>
                <td>550</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Sugar</td>
                <td>1 gram</td>
                <td>002</td>
                <td>550</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Coffee Beans</td>
                <td>100 grams</td>
                <td>003</td>
                <td>1587</td>
                <td>0</td>
            </tr>
        </tbody>
    </Table>
    );
}

export default inventoryList;
*/
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const InventoryList = () => {
    const items = [
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
            <tr>
                <td>Whipped Cream</td>
                <td>1 puff</td>
                <td>001</td>
                <td>550</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Sugar</td>
                <td>1 gram</td>
                <td>002</td>
                <td>550</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Coffee Beans</td>
                <td>100 grams</td>
                <td>003</td>
                <td>1587</td>
                <td>0</td>
            </tr>
        </tbody>
    </ReactBootStrap.Table>
        </div>
    );
}

export default InventoryList;
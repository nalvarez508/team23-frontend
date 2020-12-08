import Table from 'react-bootstrap/Table'
import React from 'react';

const inventoryList = () => {
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
}

export defualt inventoryList;
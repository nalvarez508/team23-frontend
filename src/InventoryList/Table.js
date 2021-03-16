import React from 'react';

const Table = ({inventory}) => {
    return (
        <table>
            <thead>
                <tr>
                <th>Price</th>
                <th>Quantity</th>
                <th>Name</th>
                <th>SKU</th>
                <th>Type</th>
                </tr>
            </thead>
            <tbody>
                { (inventory.length > 0) ? inventory.map((inventory, index) => {
                    return (
                        <tr key = {index}>
                            <td>{inventory.price}</td>
                            <td>{inventory.qty}</td>
                            <td>{inventory.name}</td>
                            <td>{inventory.name}</td>
                            <td>{inventory.sku}</td>
                            <td>{inventory.type}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr> }
            </tbody>
        </table>
    );
}

export default Table
import React from 'react';

const Table = ({inventory}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                { (inventory.length > 0) ? inventory.map((inventory, index) => {
                    return (
                        <tr key = {index}>
                            <td>{inventory.name}</td>
                            <td>{inventory.sku}</td>
                            <td>{inventory.qty}</td>
                            <td>${inventory.price}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr> }
            </tbody>
        </table>
    );
}

export default Table
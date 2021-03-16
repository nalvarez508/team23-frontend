{/*}
import { json } from 'express';
import React, {Component} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './inventoryList.css';

const InventoryTable = () => {
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

        <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a class="active" href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Inventory List</h1>
                        </div>
                </div>

                <div class = "mainContent">
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

            </body>

        
    );
}

class InventoryList extends Component {
    constructor(props) {
        super(props);
            this.state = {
            data: []
        };
    }
    
    componentDidMount() {
        const url = "http://localhost:8080/inventory_list"
        return fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..SumrtZnjhkzgKH5WsMBrKw.mcHdJ89lVzYRKUANdBKRQivW8C4hVKmX1rPTaorUo5nk6wLE92G8PG19YAlrjzpNINrZXE4kYY9aTgF1LymQ925GmhQVuwwxji0KFtDNUvC608jT2zgSXsNxnDt154PwHwdA4COn59loaNyLXwQo5WYBEbAdVuu-xQ1pGFM-NiL7LPf73rLi6q9teCU8No1WYFz19jWtiNxj9AKgebaFwRB0tbkW-JQPEMiKd_Eq6g4XWcSgLEDAJH7NU16ejwPn0ViwJDXYBCgfrtQPbEJP6K76eDUvsT8rDb_FKRvuVX9dAZ2tsl8EaJHKG5o--Ie-sctGl9CpS6AQ-8UxhPKGrjNpU-DCHw0HndQfqjrSSYfT4UCY4afdCiwBJW-T3fYSUBmmFZCGuaGBSbZn7XGv2uagTTp0NSQBabnK1FPEBTNTEtC--Owf86hd1n5Ei6In27-ZWI9zIdRV2DaVLgdEJOYcfggMwwr0F8PZT8tz6A5FfuzL7XIDYbPsSkHbG-V8gmO6jJ50qWB7W7dLhHHyB4ZH0i31oJW_9iwSAetKUYwutp0JGO_lgt0JSHOalPI6SndjDSnB2sWJjZH6pqJhdM-HXtokiEyOuQOl49d_dNVD4ur9xU__s7ISsrXx7eO952XPM4tZ0Q3hZ1o77c6y5hkh-FrtSzBti_J189jWtNpb5JhBgfcvRa2sKEocuFnl0iuPDtnB3KwuEPtqBzZ16bW6nZzoj2mex4q8Ms8rw80D4kwbavOs-wvC6kc_2gmP.NXT4swDIsH5g-9y7YFN1Nw",
                "realm_id": "4620816365155917290"
            }),
        })
        .then(response => response.json())
        .then(json => json.data)
        .then(data => this.setState({ 'data': data }))
        .catch(error => {
            console.log("Oops!")
        });
    }
}

export default InventoryList;
*/}
import React, {useEffect, useLayoutEffect, useState } from 'react';
import Table from './Table.js';
import './inventoryList.css';

function InventoryList () {

    const [header, setHeader] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
    //useLayoutEffect(() => {
        fetch("http://localhost:8080/getHeaders", {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }),
        })
        .then(res => res.json())
        .then((resText) => {
            console.log(JSON.stringify(resText));
            setHeader(JSON.stringify(resText));
        })
        .catch(error => {
            console.log("Oops!")
        });

        var token = header;
        token = token.replace("access_token", '').replace("refresh_token", '').replace("realm_id", '');
        token = token.replace(/[""]/g, '').replace(":", '').replace(":", '').replace(":", '').replace(/[{}]/g, '');
        var splitToken = token.split(",");
        var access = splitToken[0];
        var id = splitToken[2];

        const url = "http://localhost:8080/inventory_list"
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "access_token": access,
                "realm_id": id
            }),
        })

        .then(response => response.json())
        .then((responseText) => {
            console.log(JSON.stringify(responseText));
            /*this.setState({
                data: responseText//JSON.stringify(responseText)
            })*/
            setData(responseText);
        })
    }, [])

    return (
        <body>
            <div class = "sidenav">
                <h1>STIM</h1>
                <ul>
                <li><a href= "/Home">Home</a></li>
                <li><a class="active" href="/InventoryList">Inventory</a></li>
                <li><a href= "/Alerts">Alerts</a></li>
                <li><a href= "/AddItem">Add Item</a></li>
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

            <div className="mainTable">
                <Table inventory={data} />
            </div>
            <p></p>
        </body>
    );

}

export default InventoryList;
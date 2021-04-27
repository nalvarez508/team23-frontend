import React, {useState } from 'react';
import UpdateForm from './UpdateForm.js';
import UpdateDropdown from './UpdateDropdown.js';
import './updateItem.css';

function UpdateItem () {

    const [header, setHeader] = useState("");
    const [data, setData] = useState({});

    function test2() {
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
    }

    return (
        <body>
            <div class = "sidenav">
                <h1>STIM</h1>
                <ul>
                <li><a href= "/Home">Home</a></li>
                <li><a href="/InventoryList">Inventory</a></li>
                <li><a href= "/Alerts">Alerts</a></li>
                <li><a href="/AddItem">Add Item</a></li>
                <li><a class="active" href="/UpdateItem">Update Inventory</a></li>
                <li><a href= "/Ordering">Ordering</a></li>
                <li><a href= "/Metrics">Metrics</a></li>
                <li><a href="/Settings">Settings</a></li>
                </ul>
            </div>

            <div class = "top">
                    <div class = "logo">
                        <h1>Update Inventory</h1>
                    </div>
            </div>
            
            <div className="mainUpdate">
                <button onClick = {test2}>Refresh List</button>
                <br></br>
                <UpdateDropdown inventory = {data}/>
                <UpdateForm/>
            </div>
        </body>
    );

}

export default UpdateItem;
import React, { Component } from 'react';
import './Alerts.css';
import AlertOut from "./AlertOut";

class Alerts extends Component{
    render(){
        return(
            <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a class="active" href= "/Alerts">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href="/UpdateItem">Update Inventory</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Alerts</h1>
                        </div>
                </div>

                <div class = "mainAlerts">
                    <p>Items that are low!</p>
                    <AlertOut/>
                </div>

            </body>
        );
    }
}

export default Alerts;
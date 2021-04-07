import React, { Component } from 'react';
import './Metrics.css';
import Gross from './Gross';
import Expenses from './Expenses';
import InventoryLevel from './InventoryLevel';
import InventoryDropdown from './InventoryDropdown';
import GetHeaders, {access, id} from './getHeaders';

class Metrics extends Component{
    render(){
        return(
            
            <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a class="active" href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Metrics</h1>
                        </div>
                </div>

                <div class = "mainContent">
                    <div class = "mainChild">
                        <Gross/>
                    </div>
                    <div class = "mainChild">
                        <Expenses/>
                    </div>
                    <div class = "mainChild">
                        <InventoryDropdown/>
                        <InventoryLevel/>
                    </div>
                    <div class = "mainContent">
                        <GetHeaders/>
                        <p>{access}</p>
                        <p>{id}</p>
                    </div>
                   
                </div>

            </body>
        );
    }
}

export default Metrics;
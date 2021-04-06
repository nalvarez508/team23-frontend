import React, { Component } from 'react';
import Orderapi from './Orderapi';
import {OrderingForm} from "./OrderingForm";
import './Ordering.css';
import {Container} from "semantic-ui-react";


class Ordering extends Component{
    render(){
        return(
            <div id = "Page">
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a class="active" href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Ordering</h1>
                            
                        </div>
                </div>
                <div className = "ordering">
                    <Container>
                        <OrderingForm/>
                        
                    </Container>
                </div>
            
            </div>
        );
    }
}

export default Ordering;
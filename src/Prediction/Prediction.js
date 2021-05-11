import React, { Component } from 'react';
import './Prediction.css';
import AddForm from "../AddItem/AddForm";
import Forms from "../AddItem/Forms";
import FileUpload from "./FileUpload";

class Prediction extends Component{
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
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a className="active" href="/Prediction">Prediction</a></li>
                    <li><a href="/Settings">Settings</a></li>
                </ul>
            </div>

            <div class = "top">
                <div class = "logo">
                    <h1>Prediction</h1>
                </div>
            </div>


                <FileUpload/>


            </body>
        );
    }
}






export default Prediction;
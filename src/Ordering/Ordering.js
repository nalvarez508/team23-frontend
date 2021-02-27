import React, { Component } from 'react';
import './Ordering.css';

class Ordering extends Component{
    render(){
        return(
            <div>
                <header class = "top">
                    <table class = "header">
                        <tr>
                            <td class><h1>STIM</h1></td>
                            <td class = "header"><h1>Stock Ordering</h1></td>
                        </tr>
                    </table>
                </header>
            <div/>

        <body>
            <header>
                <div class = "menu">
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
            </header>
            <h1 class ="dash">

            </h1>
        </body>
        </div>
        );
    }
}

export default Ordering;
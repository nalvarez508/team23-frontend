import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
                <header class = "top">
                    <table class = "header">
                        <tr>
                            <td class><h1>STIM</h1></td>
                            <td class = "header"><h1>Dashboard</h1></td>
                        </tr>
                    </table>
                </header>
            <div/>

        <body>
            <header>
            
                <div class = "menu">
                    <ul>
                    <li><a class="active" href= "/">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "#">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a href= "#">Ordering</a></li>
                    <li><a href= "#">Metrics</a></li>
                    <li><a href="#">Settings</a></li>
                    </ul>
                </div>

            </header>
        </body>
        </div>
        );
    }
}

export default Home;
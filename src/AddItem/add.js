import React, { Component } from 'react';
//import {Dropdown} from 'semantic-ui-react';

import './add.css';
import Forms from './Forms.js';
import AddForm from './AddForm.js';


class AddItem extends Component{
    render(){
        return (
            <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a class="active" href="/AddItem">Add Item</a></li>
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Add Product</h1>
                        </div>
                </div>

                {/*<div class = "form">
                        <form>
                            <p>Name </p>
                            <input
                            type="text"/>
                            </form>
                        <p>Price</p>
                        <input
                            type="text"/>
                        <p>SKU</p>
                        <input
                            type="text"/>
                */}
                    <div class = "boxes">
                        <AddForm/>
                        <p></p>
                        <Forms/>
                        <p></p>
                        {/*<p>
                           //<button
                            //name='button-1'
                            //value='Submit'
                            >
                                Submit
                            </button>
                        </p>*/}
                    </div>
                    

            </body>
            );
        }
}

export default AddItem;
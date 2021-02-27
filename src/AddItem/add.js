import React, { Component } from 'react';
//import {Dropdown} from 'semantic-ui-react';

import './add.css';
import Forms from './Forms.js';
import AddForm from './AddForm.js';


class AddItem extends Component{
    render(){
        return (
            <div>
                <header class = "top">
                    <table class = "header">
                        <tr>
                            <td class><h1>STIM</h1></td>
                            <td class = "header"><h1>Add Items</h1></td>
                        </tr>
                    </table>
                </header>
                <div class = "menu">
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
                    
            </div>
            );
        }
}

export default AddItem;
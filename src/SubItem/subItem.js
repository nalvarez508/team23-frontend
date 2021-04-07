import React, { Component } from 'react';
import './subItem.css'
import SubForm from './SubForm.js'
class SubItem extends Component{



    onSubmit = (evt) => {
        console.log('The User has submitted Sub Item');
    };

    render(){
        return (
            <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a class="active" href= "/AddItem">Add Item</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Add Sub Item</h1>
                        </div>
                </div>

                    {/*<div class = "form">
                        <form>
                            <p>Name </p>
                            <input
                            type="text"/>
                            </form>
                        <p>Price/Amount</p>
                        <input
                            type="text"/>
                        <p>SKU</p>
                        <input
                            type="text"/>
                        <p>Min. Usable Quantity</p>
                        <input
                            type="text"/>
                        <p></p>
                        <button
                        name='button-1'
                        value='Submit'
                        onClick={this.onSubmit}
                        >
                            Submit
                    </button>
                </div>
                */}
                    <div class = "boxes">
                        <SubForm/>
                    </div>


            </body>
            );
        }
}

export default SubItem;
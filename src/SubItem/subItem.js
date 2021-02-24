import React, { Component } from 'react';
import './subItem.css'
import SubForm from './SubForm.js'
class SubItem extends Component{



    onSubmit = (evt) => {
        console.log('The User has submitted Sub Item');
    };

    render(){
        return (
            <div>
                <header class = "top">
                    <table class = "header">
                        <tr>
                            <td class><h1>STIM</h1></td>
                            <td class = "header"><h1>Add Sub Item</h1></td>
                        </tr>
                    </table>
                </header>
                <body>
                    <div class = "menu">
                        <ul>
                        <li><a class="active" href= "/Home">Home</a></li>
                        <li><a href="/InventoryList">Inventory</a></li>
                        <li><a href= "#">Alerts</a></li>
                        <li><a href="/AddItem">Add Item</a></li>
                        <li><a href= "/SubItem">Add SubItem</a></li>
                        <li><a href= "#">Ordering</a></li>
                        <li><a href= "#">Metrics</a></li>
                        <li><a href="#">Settings</a></li>
                        </ul>
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
                
                    
            </div>
            );
        }
}

export default SubItem;
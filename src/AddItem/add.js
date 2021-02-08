import React from 'react';
//import './add.css';


const addItem = () =>{
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
            <h1>Add Main Item</h1>
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
                <p>SubItems</p>
                <p>
                    <button
                    name='button-1'
                    value='Submit'
                    >
                        Submit
                    </button>
                </p>
                
        </div>
        );
}

export default addItem;
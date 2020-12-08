import React from 'react';
//import './add.css';


const addItem = () =>{
    return (
        <div>
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
        </div>
        );
}

export default addItem;
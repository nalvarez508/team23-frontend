import React from 'react';

const subItem = () =>{
    return (
        <div>
            <h1>Add Sub Item</h1>
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
                >
                    Submit
                </button>
                
        </div>
        );
}

export default subItem;
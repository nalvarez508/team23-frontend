import React, { Component } from 'react';

class SubItem extends Component{
    onSubmit = (evt) => {
        console.log('The User has submitted Sub Item');
    };

    render(){
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
                    onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                    
            </div>
            );
        }
}

export default SubItem;
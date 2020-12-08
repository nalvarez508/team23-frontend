import React from 'react';
//import './add.css';

class NameForm extends React.Component{
    constructor(props){
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        alert('Submitted: ' + this.state.value);
        event.preventDefault();
    }


    const addItem = () =>{
        render(){
            return (
                <div>
                    <h1>Add Main Item</h1>
                        <p>Name </p>
                            <form onSubmit={this.handleSubmit} >
                                <label>
                                    Name:
                                    <intput type="text" value ={this.state.value} onChange ={this.handleChange}/>
                                </label>
                                <input type='submit' value='Submit' />
                            </form>
                        <p>Price</p>
                        <p>SKU</p>
                </div>

                );
        }
    }
}

export default addItem;
import React, {Component} from 'react';

const dataTest = [
    { x: 1, y: 200 },
    { x: 2, y: 35 },
    { x: 3, y: 450 },
    { x: 4, y: 375 }
];

class InventoryDropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        if (this.state.value === "Sugar") {
            dataTest = [
                { x: 1, y: 200 },
                { x: 2, y: 35 },
                { x: 3, y: 450 },
                { x: 4, y: 375 }
            ]; 
        }
        if (this.state.value === "Milk") {
            /*dataTest = [
                { x: 1, y: 35 },
                { x: 2, y: 450 },
                { x: 3, y: 375 },
                { x: 4, y: 200 }
            ];*/
            dataTest[0].y = 35;
            dataTest[1].y = 450; 
            dataTest[2].y = 375; 
            dataTest[3].y = 200;  
        }
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Pick the Inventory Level of: 
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="Sugar">Sugar</option>
                <option value="Milk">Milk</option>
                <option value="Whipped Cream">Whipped Cream</option>
                <option value="Coffee Beans">Coffee Beans</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
       );
    }
}

export default InventoryDropdown;
export {dataTest};
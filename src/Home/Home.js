import React, { Component } from 'react';
import './Home.css';

class Home extends Component{

    constructor(props) {
        super(props);
          this.state = {
            data: []
          };
      }
      
    componentDidMount() {
        const url = "http://localhost:8080/testEndpoint"
        return fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }),
        })
        .then(response => response.json())
        .then((responseText) => {
            console.log(JSON.stringify(responseText));
            this.setState({
                data: JSON.stringify(responseText)
            })
        })
        .then(console.log(this.state))
        .catch(error => {
            console.log("Oops!")
        });
    }

    render(){
        return(
            <div>
                <header class = "top">
                    <table class = "header">
                        <tr>
                            <td class><h1>STIM</h1></td>
                            <td class = "header"><h1>Your Dashboard</h1></td>
                        </tr>
                    </table>
                </header>
            <div/>

        <body>
            <header>
                <div class = "menu">
                    <ul>
                    <li><a class="active" href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>
            </header>
            <h1 class ="dash">
                <pre>
                    {'           '}{JSON.stringify(this.state.data, null, 2)}
                </pre>
            </h1>

        </body>
        </div>
        );
    }
}

export default Home;
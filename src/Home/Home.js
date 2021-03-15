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

            

        <body>
            <div class = "sidenav">
                <h1>STIM</h1>
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

            <div class = "top">
                    <div class = "logo">
                        <h1>Your Dashboard</h1>
                    </div>
            </div>

            <div class = "mainContent">
                <h1 class ="dash">
                    <pre>
                        {JSON.stringify(this.state.data, null, 2)}
                    </pre>
                    Hello, User!
                </h1>
            </div>
        </body>

        );
    }
}

export default Home;
import React, { Component } from 'react';
import './Home.css';

class Home extends Component{

    constructor(props) {
        super(props);
          this.state = {
            data: []
          };
      }
    
      //Gets access_token, realm_id, and refresh_token from server.
      //Need to be passed in as headers with every endpoint call.
    componentDidMount() {
        const url = "http://localhost:8080/getHeaders"
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
                data: responseText//JSON.stringify(responseText)
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
                    <pre>
                        <p>Access Token: {this.state.data.access_token}</p>
                        <p>Realm ID: {this.state.data.realm_id}</p>
                        <p>Refresh Token: {this.state.data.refresh_token}</p>
                    </pre>
                </h1>
            </div>
        </body>

        );
    }
}

export default Home;
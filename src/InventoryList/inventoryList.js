import React, { Component } from 'react';
import Table from './Table.js';
import './inventoryList.css';

class InventoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
    }


    componentDidMount() {
        const url = "http://localhost:8080/inventory_list"
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..8uvvk6RmuJ0COEM9upnshQ.iuA2BnqYh-LtgsOYPUsyfaLQhe9zsbZ3bqASrOJiCOTATR0-z2T33zfH9Wp8P8NoTjfL1x8zZENeJP4BJrjyDeSIX4PjqbIkxykvAMNqUBdRr8QHfpsXaCYHDYhW76sQCSinuX3im7_9IsKxorv7nZrx-o2z3WS-jalreoAQbYaH_mKyVjeyw6KbpprF-wsjz2JV_98O68Ths0rBP-meJ85I6dGcCtZ-Bk_al17UYZdcUpIC2xK_DRco04W7JAR3JwnsC_W9LHYebJxIOfeq4oiuqSU-tlLEkTgKe09vfWDcEhp7SKEq3bLT0wZHG7EtYQ5csTz9iVJh3xdN_exjUBsnz04LcsaFmkIb347pSCnMiZ8tY4D9UFP_F1ilmHYdqYcT0DZrWh1hEcp5d2WrCC3_ZS9nSOBWA2eheOFO-0WAtKcrQKtNTUjWQbVe7Abnq71fRmzOoNyORdaGmY2CPAEFljlnROlzCJOD6WeszF2OboDdoRXPS2nd6bkSNBbUOmYrEIFE7P7J-VEZbzZh1OTErjeG8aTFbCf9y7rC83LEM28tTqOXPoe6bYCylpw83chdrycGthb5eed_fvMwgsCCVYVQmTzDCjMkyQ8Hk5ZpCt-H5L7AYDgI2o_1cH_NNYJ90TWr0jLbAnCtYr1m6IsxHdBkShgvYWmvI3VTonYEpbW27kcMpsHLfK6mLduvB7g_fSxK1ITqPqIVMWyrle8xlneifUs67BO7p0-mUtJB84-jRRdrMR6B9NMvt8Mm.IVXqEBDYjMntS2nEVZdjBw",
                "realm_id": "46208163651514239600"
            }),
        })

        .then(response => response.json())
        .then((responseText) => {
            console.log(JSON.stringify(responseText));
            this.setState({
                data: responseText//JSON.stringify(responseText)
            })
        })
    }

    render() {
        return (
            <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a class="active" href="/InventoryList">Inventory</a></li>
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
                            <h1>Inventory List</h1>
                        </div>
                </div>

                <div className="mainContent">
                    <Table inventory={this.state.data} />
                    <pre>
                        {JSON.stringify(this.state.data, null, 2)}
                    </pre>
                </div>
            </body>
    );
  }
}

export default InventoryList;
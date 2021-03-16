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
                "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..yOSnngDIhEPlymK3voF69A.XjU9X-QYaTq1Y72bt6xblQv3XtqvjkhXTW70VKsAo9qHqPUnGSJu6s_02IRdxTn00S23XYjmHWLEUZFlbpyN5Zh8ycArraz5vortlfOtJ1euCTwZKo73_xTdGyqeWUmNiqcBQUdFR0arCXz9usvYjlBfLj-KpyB2brn94oaqNdQt_Mjp9iPY8z_7uqhm8Bpe9ni50U8C8DLWN6WyzhkRKLLKEuMrHp_qZDLyyPi1Ox9pK6sGRaQnKJdwdxT1gATeCYJ7QDY8UnLBfoOFQ5CRba6pQkccLejeNYp9iIB4NRooGM2BuVQuaFGSKCeQfGaaBnulmo-wkDJXTJPj8TzSNj1XsCVvqLXp39sSzkGwIXeB7Cw-gNdpuo8IHm0jL-SEv90YtMk8rjvA8Ei7rWNaeXutxNz0LyZr9XmmxhYmDJGJ-uNWsBbdXCIBmgntrCEWjF2IrUzDb-ahqLlgQku9WiWR2fwylo3Vc0U34B8aXXqYM9COSEj3On9yOia2YpK2_naglS6BEEoR0B4mIqUuYvXEjqaEwJWrLCSkDOElXLeiUVS2PXDST7EgkIXAyLm5cZesfS305Cn8sFg6tiJ790nFs6JMoK2kpc2ftWEGYJk5o_YbQRmBfqe4GpG3ybYUStkT_iidIwZLAmbBeZ_ah8f7TG6-ZEqQQDx322_defkrj2InSshfZs2-i8SWoDHQncli6hGMaodAzcvwj5stXyY1KRSXk04cC2vgyz76ezOhSw2egM3GzA1EvLDShYNY.fHaDD9aDFWCOapX315ArJA",
                "realm_id": "4620816365155917290"
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
import React, { Component } from 'react';
import Table from './Table.js';
import './inventoryList.css';

class InventoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
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
                "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..Q__3HnUamcJLQSTGixFhAw.oqNiLgvQrIaSiWQpK-FIwtXtA9rtuLLmbWBfEstoibgzgeWFz7P5MqOTp--I2Esdql7DdI-9DlRkLo7nsNPlPLJ5E1fhPSn_uaNtJAaMhauuPFiCd4IPp0k9toLLm1PvfG3rihCtQmTRDZdz5ORtwir42bBevhOocsHUNwF0JOJx4rxM_o3572N61kH-CKU_TNus2ODiw8C8v6u_xnsfFFGdiknOUSaHE6qAwN4mkqITQu9rkQqhDeYCwP84dGlifPTMLniQN83ZI-ImWtgr8F6o3M81VyFUQhFeyWn-UO6Lc2IxT-nl0MM6vlKwIZ3lDmMtKPUaGawTHgeH2IJYK21gJZmxrlBlvJThnkw74HUBHwBE44ACDBbNbc9uyEUCxs9-gOrQcohS_9_R_oQ6bFIh4b-5IICzOMRpZj8I7MTFlWjCOPQgPcIMH5Y20sRNoFltas9TwVUhBFZoax5jYGP4UB3ZhFg9O0fBg3omlOohjlaPgzHXVRumGMllDW1xMvMDMyJHNIyKOTQHdWqBmpuJkQBZ2ePaQLI2N8lY7X4_euooBMBSbTqj9HoUaA8gwawLQA01U35y__1lg8paPwGfo1yr_TM5SHWT-zbMoKJCWkf7z9CUJe7_LDOb7MynUJZqfDMxPrT_fUHM2_AyTOsCuSTb49Q_UkfA5kjbaoehb88i2BohPZSwTnT2Xuz-5j58p75wpmI3bbToBGg2LrFVOYgVcuxyBNDVWsFLEPiS8M3o3LDssFPIpvt3ba9x.4znEXfrwEEPPqgWVBRNRLA",
                "realm_id": "4620816365151423960"
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
                    
                </div>
            </body>
    );
  }
}

export default InventoryList;
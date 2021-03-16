import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..aFPTLf_Cl2WP0a2YIdJDqg.n7qeSewIocYaUX0ttdRTxB6xFvqaR2iGHcIglJUe4CJMDbCBhvuCny5gN1RgGt18eDIGD7mCvJmQ6j_ehuDRkdP-Qg5UdqugH9u4AKdWNLOhgobsmeDamWv2JRrL_zo1wQzLUmo2xoo32z8JSQnd9lpnQUsmc2G1V94cB4Mkl31kaBRCb5cyr6v9KhxtsKIlp1lAi72mcM6FSLq3NwSCCGT98cNFCTdFO4JpZ7VGGBDQLl9BTXlczdQ0dpjcxXyf53Z_T2g_CKSlTEQo3PKl9r6fnDcrQ_UVSiiazsiGDIBZ9c_tCrAxc-BnNAlT_HVPQ8bxBytZNFEnYzJLWr00XzYoiJFUayZlIkbHbqbue9HNgDuadphjRSE1Q9o6WewiZQm0PxgpUf4gB5SBFoFmZtQmcyyvXv7esDwQ6O9Uip3YZiJ31Fe4kzCUAGLt_kN4vLtw8C08Hq8KS25e_GZT_Id3ZA1FCNTVlOHWuDvXpjpNVgIxGenZbhb8ilYI3m3qd9nUbpsJfSBHC9GIf5_xt4_-ZbC9iOUP9Cta-W5OLjnRp1N0r6ZcJC-0XlbftIUJKYaIcFI1y22qbTXOP9VQEmKF2qSTHd6vMoxVlYbD9wpkA09MarXic_GWrm6xdYmeq6shUTtoKA7TqTKz_frtLawejaBQ0np8inGjI6HWPUZpXN6s_Bc8VGS0A95AVaxAYV4x7_EgUlzHoCxUeq7welcwpuG4QLLFAsyAEo2EAs9wZLUlWuZbC9Gd3Odq27Bn.Lj1mNfMJnWImsAVarJGwwA",
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
                </div>
            </body>
    );
  }
}

export default InventoryList;
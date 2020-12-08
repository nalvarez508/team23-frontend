import React from 'react';
//import './Home.css';

const home = () =>{
    return(
        <div>
            <header>
            <h1><stim>
            STIM
            </stim>
            
            </h1>
            <h1>
            Your Dashboard
            </h1>
        </header>
        <div/>

      <body>
        <header>
          
            <div>
                <nav>
                  <ul>
                    <li><a href= "/">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "#">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "#">Ordering</a></li>
                    <li><a href= "#">Metrics</a></li>
                    <li><a href="#">Settings</a></li>
                  </ul>
                </nav>
            </div>
        </header>
      </body>
    </div>
    );
}

export default home;
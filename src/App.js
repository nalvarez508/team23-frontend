import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import InventoryList from './InventoryList/inventoryList';
import Home from './Home/Home';
import AddItem from './SubItem/subItem';
import UpdateItem from './UpdateItem/updateItem';
import Alerts from './Alerts/Alerts';
import Ordering from './Ordering/Ordering';
import Metrics from './Metrics/Metrics';
import Settings from './Settings/Settings';

class App extends Component {
  render() {
    return (      
      <BrowserRouter>
       <div>
           <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/InventoryList" component={InventoryList}/>
            <Route path="/AddItem" component={AddItem}/>
            <Route path="/UpdateItem" component={UpdateItem}/>
            <Route path="/Alerts" component={Alerts}/>
            <Route path="/Ordering" component={Ordering}/>
            <Route path="/Metrics" component={Metrics}/>
            <Route path="/Settings" component={Settings}/>

            
          </Switch>
       </div> 
     </BrowserRouter>
   );
  }
}

/*
function App() {
  return (
    <div className="App">
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
                    <li><a href= "#">Home</a></li>
                    <li><a href="#">Inventory</a></li>
                    <li><a href= "#">Alerts</a></li>
                    <li><a href="#">Add Item</a></li>
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

*/
export default App;

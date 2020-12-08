import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import InventoryList from './InventoryList/inventoryList';
import Home from './Home/Home';
import AddItem from './AddItem/add';

class App extends Component {
  render() {
    return (      
      <BrowserRouter>
       <div>
           <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/AddItem" component={AddItem}/>
            <Route path="/InventoryList" component={InventoryList}/>
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

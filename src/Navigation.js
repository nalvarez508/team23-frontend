import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/AddItem">AddItem</NavLink>
          <NavLink to="/InventoryList">InventoryList</NavLink>
          <NavLink to="/Alerts">Alerts</NavLink>
          <NavLink to="/Ordering">Ordering</NavLink>
          <NavLink to="/Metrics">Metrics</NavLink>
          <NavLink to="/Settings">Settings</NavLink>
       </div>
    );
}
 
export default Navigation;
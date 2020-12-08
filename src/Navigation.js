import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AddItem">AddItem</NavLink>
          <NavLink to="/InventoryList">InventoryList</NavLink>
       </div>
    );
}
 
export default Navigation;
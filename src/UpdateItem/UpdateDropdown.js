import React, {Component} from 'react';

const UpdateDropdown = ({inventory}) => {
    
    return (
        <select>
            {(inventory.length > 0) ? inventory.map(item=> {
                return (
                    <option key={item.name}>
                        {item.name}
                    </option>
                )
            }) : <select><option>Loading...</option></select> }
        </select>
    );
}

export default UpdateDropdown;
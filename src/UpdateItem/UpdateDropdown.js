import React, {useState} from 'react';

var value = 111; 

const UpdateDropdown = ({inventory}) => {
    
    /* const handleChangeInput = (index, event) => {
        event.preventDefault();
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
       
    } */

    //const [targetVal, setTarget] = useState(111);

    function handleChange(event) {
        //setTarget(event.target.value);
        value = event.target.value;
        console.log(event.target.value);
    }

    return (
        <select onChange={handleChange}>
            {(inventory.length > 0) ? inventory.map(item=> {
                return (
                    <option key={item.sku}>
                        {item.sku}
                    </option>
                )
            }) : <select><option>Loading...</option></select> }
        </select>
    );
}

export {value};
export default UpdateDropdown;
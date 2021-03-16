import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        button: {
            margin: theme.spacing(1)
        }
    }
}))

function SubForm(){
    const classes = useStyles();
    const [inputFields, setInputField] = useState([
        {name: '', sku: '', minUsability: '', currentQuantity: ''},
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Subitem Added!')
        console.log("InputFields", inputFields);
        console.log(JSON.stringify(inputFields));
        //console.log('http://localhost:8080/addSubItem?name=${encodeURIComponent(inputFields.name)}&sku={encodedURIComponent(inputFields.sku))&qty={encodeURIComponent(inputFields.currentQuanitity)}&muq={encodedURIComponent(inputFields.minUsability)}')
        fetch('http://localhost:8080/addSubItem?name=${encodeURIComponent(inputFields.map.name)}&sku={encodedURIComponent(inputFields.sku))&qty={encodeURIComponent(inputFields.currentQuanitity)}&muq={encodedURIComponent(inputFields.minUsability)}', {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..jPbJLHKvrZtZmbszR5_fTg.S-ObuZQmXOWvPu7s5feNDrnWqrQTVu8a9YeaXBjDMOchy8wPUa2xfB3VZBYjqwt3L2nLRBKwabqqNLf4Z3iAOW59BcUypWDzP8uvSjo8bY8gKkIq8uUCen5nX6nWJLiXAi-qTj0dqr391m5r1xHnJ2haEWkgRakfEKcKhDMBKv7EozX364s7JznqdWeKqOmXf5t621NzjhhubaXdpAgtFstDEwxiZFulCyF4VGWZVVriXnJVXIrVH5cHIBOoSYZf89I88c-TEYYfKmWs8j-LRJLtmh9grN_G5e1ia_xb0VtQRYpNy8ddO6PnG7_-hUL362qBr_ZcEpu-SDOC6ggQJdQjYMgbNMxK6lDI4bwe36vbsdM_I88nqZ1eP_mr84QyQ2G8OEPDj7F9P-gqlaFZ-j_5ih0hWEKP_9Clyob06FOrBXYuihH29V9J-2FDg4yoKZMZt0Mr84TvxYgEWTClXMZG1Bag1BM9-tnDQwMLqVNiQ1ZTo2jzi_Zf2pVchn6jSLe9JMP5sddRrZ0ult4UfoONVJOJeLlJfnpN1s_RAJORMHwE-1HTdXiPzQRTMLg-c0lga1jD6Dhi4cQmoV_eXAETEer-bVnS-BMzC-e1TG8tPPkD_VoOdQDpoCA43SHb0WU1JA9KxHqsy2DOzVpUwaXxmQg1syOpWxb3DQNw4_gNouwnmANNDbHHu4T5MVuSD6Z2WWeulcygtwl-J5CVRkyEWTwnjXZlXdxtWU6GNQ9aulH90AHdl3nkcmPVBAx2.mBlSojNIpkjRy5gcBhIxmw",
        "realm_id": "4620816365151423960"        
        }),
        })
        .then(response => response.json())
        .catch(error => {
            console.log("Oops!")
        });

        //axios.get('http://localhost:8080/testEndPoint').then(res => console.log(res));
        //fetch('http://localhost:8080/testEndPoint')
        }

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    }

    return(
        <Container>
            <form className = {classes.root} onSubmit = {handleSubmit}>
                {inputFields.map((inputField, index) => (
                        <div key = {index}>
                            <TextField
                            name = "name"
                            label="Name"
                            variant = "filled"
                            value = {inputField.name}   
                            onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                            name = "sku"
                            label = "SKU"
                            variant = "filled"
                            value = {inputField.sku}
                            onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                            name = "minUsability"
                            label = "Minimum Usability"
                            variant = "filled"
                            value = {inputField.minUsability}
                            onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                            name = "currentQuantity"
                            label = "Current Quantity"
                            variant = "filled"
                            value = {inputField.currentQuantity}
                            onChange={event => handleChangeInput(index, event)}
                            />
                    </div>
                ))}
                <Button
                className={classes.button}
                variant ="contained"
                color = "primary" 
                type="submit" 
                onClick={handleSubmit}
                >Send</Button>
            </form>
        </Container>
    );
}

export default SubForm;
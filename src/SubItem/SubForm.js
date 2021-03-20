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
        {name: '', sku: '', price: '', currentQuantity: ''},
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Subitem Added!')
        //console.log("InputFields", inputFields);
        var sentence = JSON.stringify(inputFields);
        //console.log(sentence);

        var total = sentence.replace("name", '').replace("sku", '').replace("price", '').replace("currentQuantity", '').replace(":", '');
        total = total.replace(":", '').replace(":", '').replace(":", '');
        total = total.replace(' " ', '');
        total = total.replace(/[""]/g, '').replace(/[{}]/g, '').replace("[", '').replace("]", '');
        var pieces = total.split(",");
        //console.log(total);
        //console.log(pieces[0]);


        const url = "http://localhost:8080/createMainItem?name=" + pieces[0] + "&sku=" + pieces[1] + "&price=" + pieces[2] + "&qty=" + pieces[3];
        //console.log(url)
        //console.log(JSON.stringify(inputFields));
        //console.log('http://localhost:8080/addSubItem?name=${encodeURIComponent(pieces[0])}&sku={encodedURIComponent(pieces[1]))&qty={encodeURIComponent(pieces[2])}&muq={encodedURIComponent(pieces[3])}')
        fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..8uvvk6RmuJ0COEM9upnshQ.iuA2BnqYh-LtgsOYPUsyfaLQhe9zsbZ3bqASrOJiCOTATR0-z2T33zfH9Wp8P8NoTjfL1x8zZENeJP4BJrjyDeSIX4PjqbIkxykvAMNqUBdRr8QHfpsXaCYHDYhW76sQCSinuX3im7_9IsKxorv7nZrx-o2z3WS-jalreoAQbYaH_mKyVjeyw6KbpprF-wsjz2JV_98O68Ths0rBP-meJ85I6dGcCtZ-Bk_al17UYZdcUpIC2xK_DRco04W7JAR3JwnsC_W9LHYebJxIOfeq4oiuqSU-tlLEkTgKe09vfWDcEhp7SKEq3bLT0wZHG7EtYQ5csTz9iVJh3xdN_exjUBsnz04LcsaFmkIb347pSCnMiZ8tY4D9UFP_F1ilmHYdqYcT0DZrWh1hEcp5d2WrCC3_ZS9nSOBWA2eheOFO-0WAtKcrQKtNTUjWQbVe7Abnq71fRmzOoNyORdaGmY2CPAEFljlnROlzCJOD6WeszF2OboDdoRXPS2nd6bkSNBbUOmYrEIFE7P7J-VEZbzZh1OTErjeG8aTFbCf9y7rC83LEM28tTqOXPoe6bYCylpw83chdrycGthb5eed_fvMwgsCCVYVQmTzDCjMkyQ8Hk5ZpCt-H5L7AYDgI2o_1cH_NNYJ90TWr0jLbAnCtYr1m6IsxHdBkShgvYWmvI3VTonYEpbW27kcMpsHLfK6mLduvB7g_fSxK1ITqPqIVMWyrle8xlneifUs67BO7p0-mUtJB84-jRRdrMR6B9NMvt8Mm.IVXqEBDYjMntS2nEVZdjBw",
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
                            name = "price"
                            label = "Price"
                            variant = "filled"
                            value = {inputField.quantity}
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
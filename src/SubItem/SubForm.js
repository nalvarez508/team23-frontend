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
    const [header, setHeader] = useState("");


    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Subitem Added!')
        //console.log("InputFields", inputFields);
        fetch("http://localhost:8080/getHeaders", {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }),
        })
        .then(res => res.json())
        .then((resText) => {
            console.log(JSON.stringify(resText));
            setHeader(JSON.stringify(resText));
        })
        .catch(error => {
            console.log("Oops!")
        });

        var token = header;
        token = token.replace("access_token", '').replace("refresh_token", '').replace("realm_id", '');
        token = token.replace(/[""]/g, '').replace(":", '').replace(":", '').replace(":", '').replace(/[{}]/g, '');
        var splitToken = token.split(",");
        var access = splitToken[0];
        var id = splitToken[2];




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
        "access_token": access,
        "realm_id": id        
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
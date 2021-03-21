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
        "access_token": "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..Q__3HnUamcJLQSTGixFhAw.oqNiLgvQrIaSiWQpK-FIwtXtA9rtuLLmbWBfEstoibgzgeWFz7P5MqOTp--I2Esdql7DdI-9DlRkLo7nsNPlPLJ5E1fhPSn_uaNtJAaMhauuPFiCd4IPp0k9toLLm1PvfG3rihCtQmTRDZdz5ORtwir42bBevhOocsHUNwF0JOJx4rxM_o3572N61kH-CKU_TNus2ODiw8C8v6u_xnsfFFGdiknOUSaHE6qAwN4mkqITQu9rkQqhDeYCwP84dGlifPTMLniQN83ZI-ImWtgr8F6o3M81VyFUQhFeyWn-UO6Lc2IxT-nl0MM6vlKwIZ3lDmMtKPUaGawTHgeH2IJYK21gJZmxrlBlvJThnkw74HUBHwBE44ACDBbNbc9uyEUCxs9-gOrQcohS_9_R_oQ6bFIh4b-5IICzOMRpZj8I7MTFlWjCOPQgPcIMH5Y20sRNoFltas9TwVUhBFZoax5jYGP4UB3ZhFg9O0fBg3omlOohjlaPgzHXVRumGMllDW1xMvMDMyJHNIyKOTQHdWqBmpuJkQBZ2ePaQLI2N8lY7X4_euooBMBSbTqj9HoUaA8gwawLQA01U35y__1lg8paPwGfo1yr_TM5SHWT-zbMoKJCWkf7z9CUJe7_LDOb7MynUJZqfDMxPrT_fUHM2_AyTOsCuSTb49Q_UkfA5kjbaoehb88i2BohPZSwTnT2Xuz-5j58p75wpmI3bbToBGg2LrFVOYgVcuxyBNDVWsFLEPiS8M3o3LDssFPIpvt3ba9x.4znEXfrwEEPPqgWVBRNRLA",
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
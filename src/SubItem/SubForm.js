import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';

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
        {name: '', price: '', sku: '', minUsability: ''},
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Subitem Added!')
        console.log("InputFields", inputFields);
    };

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
                            name = "price"
                            label = "Price/Amount"
                            variant = "filled"
                            value = {inputField.price}
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
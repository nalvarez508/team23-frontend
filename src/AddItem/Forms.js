import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
        button: {
            margin: theme.spacing(1)
        }
    }
}))


function Forms(){
    const classes = useStyles();
    const [inputFields, setInputField] = useState([
        {subItem: '', amount: ''},
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    }

    const handleAddFields = () => {
        setInputField([...inputFields, {subItem: '', amount: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputField(values);
    }

    return(
        <Container>
            <form className = {classes.root} onSubmit ={handleSubmit}> 
                {inputFields.map((inputField, index) => (
                    <div key = {index}>
                        <TextField
                        name = "subItem"
                        label="Sub Item"
                        variant = "filled"
                        value = {inputField.subItem}   
                        onChange={event => handleChangeInput(index, event)}
                        />
                        <TextField
                        name = "amount"
                        label = "Amount"
                        variant = "filled"
                        value = {inputField.Amount}
                        onChange={event => handleChangeInput(index, event)}
                        />
                        <IconButton
                        onClick={()=> handleRemoveFields(index)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={() => handleAddFields()}>
                            <AddIcon />
                        </IconButton>
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

export default Forms;
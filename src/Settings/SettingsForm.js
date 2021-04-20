import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

function SettingsForm(){
    const classes = useStyles();
    const [inputFields, setInputField] = useState([
        {threshold: ''}
    ]);
    const [header, setHeader] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        var sentence = JSON.stringify(inputFields);
        var total = sentence.replace("threshold", '').replace(":", '');
        total = total.replace(":", '').replace(":", '').replace(":", '');
        total = total.replace(' " ', '');
        total = total.replace(/[""]/g, '').replace(/[{}]/g, '').replace("[", '').replace("]", '');
        var pieces = total.split(",");
        const url = "http://localhost:8080/changeThreshold?threshold=" + pieces[0];
        console.log(pieces[0]);
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",      
            }),
            })
            .then(response => response.json())
            .catch(error => {
                console.log("Oops!")
            });
            alert('Threshold Set!');

    }
    const handleChangeInput = (index, event) => {
        event.preventDefault();
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
                            name = "threshold"
                            label="Threshold"
                            variant = "filled"
                            value = {inputField.threshold}   
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

export default SettingsForm
import React, {useState} from 'react';
import {Form, Input, Header} from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import './OrderingForm.css'
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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

export const OrderingForm = () => {
    const classes = useStyles();
    const [order, setOrder] = useState('');
    const [items, setItem] = useState([]);



    return(
        <div className="ord">
            <Form class = "ff">
                <Form.Field>
                    <TextField
                        name = "Item"
                        label = "Item Name"
                        variant = "filled"
                        value = {order} 
                        onChange = {e => setOrder(e.target.value)}
                        />
                </Form.Field>
                <br></br>
                <Form.Field>
                    <Button
                    className = {classes.button}
                    variant = "contained"
                    color = "primary"
                    type = "submit"
                    onClick = {async() =>{
                        var item = order;
                        
                        const response = await fetch('http://127.0.0.1:5000/subItem/' + item,{
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json"
                            },
                        })
                        .then(res => res.json())
                        .then((json) => {
                            setItem(json)
                        })
                        
                        console.log(response);
                        console.log(items);
                        console.log('response worked!');

                            
                    
                    }}>Submit</Button>
                </Form.Field>
            </Form>
            <div className="cart">
                <ul class = "list">
                    {items.map(item=>( 
                        <li class = "test" key={item.Amount}>
                            <Header>Description: {item.description}</Header>
                            <small>Price Per: {item.Amount}</small>
                            <br></br>
                            <small>Rating: {item.Rating}</small>
                            <br></br>
                            <small>Reviews: {item.Count}</small>
                            <br></br>
                            <small>Price: {item.price}</small>
                            <br></br>
                            <small>Total: {item.Total} Oz.</small>
                            <br></br>
                            <small>URL: {item.url}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
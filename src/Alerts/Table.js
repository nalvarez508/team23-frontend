import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
        button: {
            margin: theme.spacing(1),
            position: 'relative',
            float: 'right'
        }
    }
}))

const Table = ({inventory}) => {
    const classes = useStyles();

    return (
        <div className = "Alerts">  
            <ul class = "list">
            { (inventory.length > 0) ? inventory.map((inventory, index) => {
                return (
                    <li key = {index}>
                        <small>{inventory.sku}</small>
                        <small> {inventory.name} is running low on inventory!</small>
                        <small> Quantity left: {inventory.qty} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </small>
                        <div>
                            <Button
                            component ={Link} to="/Ordering"
                            className={classes.button}
                            variant ="contained"
                            color = "primary" 
                            align = "right"
                            >
                                Order
                            </Button>
                        </div>
                    </li>
                )
            }) : <tr><td colSpan="4">Loading...</td></tr> }
            </ul>
        </div>
    );
}

export default Table
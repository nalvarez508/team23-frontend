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
            margin: theme.spacing(1)
        }
    }
}))

const Table = ({inventory}) => {
    const classes = useStyles();

    return (
        <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                { (inventory.length > 0) ? inventory.map((inventory, index) => {
                    return (
                        <tr key = {index}>
                            <td>{inventory.name}</td>
                            <td>{inventory.sku}</td>
                            <td>{inventory.qty}</td>
                            <Button
                            component ={Link} to="/Ordering"
                            className={classes.button}
                            variant ="contained"
                            color = "primary" 
                            >
                                Acknowledge
                            </Button>
                        </tr>
                    )
                }) : <tr><td colSpan="4">Loading...</td></tr> }
            </tbody>
        </table>
    );
}

export default Table
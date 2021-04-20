import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import {Form, Input, Header} from 'semantic-ui-react';
import Table from './Table.js';
import './AlertOut.css';

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

function AlertOut() {
    const classes = useStyles();
    const [items, setItem] = useState("");
    const [listItems, setListItems] = useState([]);
    const url = "http://localhost:8080/getHeaders"

    //useEffect(()=> {
        fetch(url, {
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
            setItem(JSON.stringify(resText));
        })
        var it = items;
        var token = it.replace("access_token", '').replace("refresh_token", '').replace("realm_id", '');
        token = token.replace(/[""]/g, '').replace(":", '').replace(":", '').replace(":", '').replace(/[{}]/g, '');
        var splitToken = token.split(",");
        var access = splitToken[0];
        var id = splitToken[2];


        fetch("http://localhost:8080/alertCheck", {
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
            .then((json) => {
                console.log(JSON.stringify(json));
                setListItems(json);
                console.log(listItems);
            })
            .catch(error => {
                console.log("Oops!")
            });
    //}, []);

    return(
        <div className="cart">
                <Table inventory={listItems} />
            </div>
    )

}

export default AlertOut;

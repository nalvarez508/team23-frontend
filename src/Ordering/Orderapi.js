import React, { Component } from 'react';
import {List, Header, Rating} from "semantic-ui-react";
import './Orderapi.css'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams} from "react-router-dom";

class Orderapi extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:5000/subItem/sugar')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render(){

        var{isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        else{

            return(
                <div className = "Orderapi">
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
                        ))};
                    </ul>

                </div>
            );
        }
    }

}

export default Orderapi;
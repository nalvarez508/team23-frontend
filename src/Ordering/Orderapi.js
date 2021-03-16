import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Orderapi = () => {
    const [ingredients, setIngredients] = useState([])

 /*   const fetchData = () => {
        const ingredient = 'http://127.0.0.1:5000/subItem/sugar';

        const getIngredient = axios.get(ingredient)
        axios.all(getIngredient).then(
            axios.spread((...allData) => {
                const allDataIngredient = allData

                console.log(allDataIngredient)
            })
        )
    }
*/
    useEffect(() => {
        /*fetch("http://127.0.0.1:5000/subItem/sugar").then(res =>
            response.json().then(data=> {
                setIngredients(data);
            })
        )*/

        axios.get('http://127.0.0.1:5000/subItem/sugar')
            .then(res => {
                console.log(res)
                setIngredients(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    console.log(ingredients)

    return(
        <div className = "Ordering">
            <ul>
                {
                    ingredients
                }
            </ul>
        </div>
    );



}

export default Orderapi;
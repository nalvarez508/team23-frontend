import React, {useState } from 'react';

var access = "";
var id = "";

function GetHeaders () {

    const [header, setHeader] = useState("");

        fetch("http://localhost:8080/getHeaders", {
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
            console.log(JSON.stringify(resText));
            setHeader(JSON.stringify(resText));
        })
        .catch(error => {
            console.log("Oops!")
        });

        var token = header;
        token = token.replace("access_token", '').replace("refresh_token", '').replace("realm_id", '');
        token = token.replace(/[""]/g, '').replace(":", '').replace(":", '').replace(":", '').replace(/[{}]/g, '');
        var splitToken = token.split(",");
        access = splitToken[0];
        id = splitToken[2];

        return (
            <div>
                {/*this.GetHeaders()*/}
            </div>
        );
}

export default GetHeaders;
export {access, id};
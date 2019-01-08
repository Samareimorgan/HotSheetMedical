import React, {Component} from "react";
import unirest from "unirest";

class UserMedication extends Component {
    componentDidMount () {
        unirest.get('https://iterar-mapi-us.p.mashape.com/api/autocomplete/?query=res')
        .header("X-Mashape-Key", "vbsm1GCB6dmshJGhRlhJ0XA5A5Ynp1DiG5UjsnSr5teRHlzNB2")
        .header("Accept", "application/json")
        .end(function (result) {
          console.log(result.status, result.headers, result.body);
        });
            
    }

    render () {
        return(
            <div></div>
        );

    }

}

export default UserMedication;
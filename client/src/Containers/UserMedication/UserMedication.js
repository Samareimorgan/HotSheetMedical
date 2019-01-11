import React, {Component} from "react";
import unirest from "unirest";
import classes from "./UserMedication.css";
import Option from "./Option";
require('dotenv').config();

class UserMedication extends Component {
    state = {
        suggestions: []
    }
    
    componentDidMount() {
    const API_KEY = process.env.REACT_APP_MAPI_API_KEY;
    console.log({API_KEY});
        unirest.get("https://iterar-mapi-us.p.mashape.com/api/autocomplete?query=res")
        .header("X-Mashape-Key", {API_KEY})
        .header("Accept", "application/json")
        .end (result => {
                const response = result.body;
                    this.setState({suggestions: response.suggestions})

      console.log(response.suggestions[0]);
         
        });
        
       
    }
    
    render () {
        const suggestions = this.state.suggestions.map((suggestion, index) => {
            return <Option medication={suggestion} key={index}/>
        })
        return(
            <div>
                <section className = {classes.Suggestions}>
                    {suggestions}
                </section>
            </div>
        );

    }

}

export default UserMedication;
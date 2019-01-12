import React, {Component} from "react";
import unirest from "unirest";
import classes from "./UserMedication.css";


class UserMedication extends Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            value: "res"
        }
        this.medicationInputHandler = this.medicationInputHandler.bind(this);

    }
    

    medicationInputHandler = (event) => {
        this.setState({value:event.target.value});
            console.log(this.state.value);
    }
    
    componentDidMount() {
        let query = this.state.value;
    // const API_KEY = process.env.REACT_APP_MAPI_API_KEY;
    // console.log({API_KEY});
        unirest.get("https://iterar-mapi-us.p.mashape.com/api/autocomplete?query=" + {query} + "")
        .header("X-Mashape-Key", "")
        .header("Accept", "application/json")
        .end(result => {
            console.log(result.body);
                    const response = result.body
                    this.setState({suggestions: response.suggestions});
        });

    }
    
    render () 
    {
        
        const suggestions = this.state.suggestions.map((suggestion) => {
            return (
               <option key = {suggestion}>
                {suggestion}
               </option>
            )
            
        })
        return(
            
            <div className = {classes.Medication}>
                <input type = "text" value={this.state.value} onChange = {this.medicationInputHandler} placeholder="Input the first 3 letters of your medication" ></input>
                <select className = {classes.Suggestions}>
                    {suggestions}
                </select>
            </div>
        );

    }

}

export default UserMedication;
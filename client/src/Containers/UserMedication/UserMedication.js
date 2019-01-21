import React, {Component} from "react";
import unirest from "unirest";
import classes from "./UserMedication.css";
import Modal from "../../components/Modal/Modal";

console.log(process.env);

class UserMedication extends Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            value: "res"
        }
        this.medicationInputHandler = this.medicationInputHandler.bind(this);

    }

    saveMed = (info) => {
        unirest.post("/api/medications", info);
    }


    

    medicationInputHandler = (event) => {
        
    
        let query = event.target.value;
        
        const API_KEY = process.env.REACT_APP_MAPI_API_KEY;
      
        
        if(query.length === 3) {
            
            console.log("Triggered");
            unirest.get("https://iterar-mapi-us.p.rapidapi.com/api/"+ query "/substances.json")
            .header("X-RapidAPI-Key", API_KEY)
            .header("Accept", "application/json")
            .end(result => {
                console.log(result.body);
                        const response = result.body
                        this.setState({suggestions: response.suggestions, value: query});
        });

        } else {
            this.setState({value:event.target.value})
        }
        
    
    }
    
    
    render () 
    {
        let suggestions;
        if(this.state.suggestions) {
            suggestions = this.state.suggestions.map((suggestion) => {
            return (
               <option key = {suggestion}>
                {suggestion}
               </option>
            )
        })
    }
        return(
            <div className = {classes.Medication}>
                <Modal>
                    <h3> Medication Lookup</h3>  
                    
                    <input type = "text" value={this.state.value} data-tip="Input the first 3 letters of your medication" onChange = {this.medicationInputHandler} className={classes.MedicationInput}></input>
                   
                    <hr/>
                    <select className = {classes.Suggestions}>
                        {suggestions}
                    </select>
                    <hr/>
                    
                    <a href = {this.props.link} ><button type = "submit" className={classes.MedicationSave}>SAVE</button> </a>
                </Modal>
            </div>
            
        );

    }

}

export default UserMedication;
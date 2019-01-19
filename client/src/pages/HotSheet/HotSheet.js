import React, {Component} from "react";
import HotSheetData from "../../components/HotSheetData/HotSheetData";
import Auxiliary from "../../hoc/Auxiliary";
import FormatDropdown from "../../components/FormatDropdown/FormatDropdown";
import classes from "./HotSheet.css"


class HotSheet extends Component {

    render() {
        return(
        <Auxiliary className ={classes.HotSheet}>
            <FormatDropdown />

            <HotSheetData name = "Samantha Johnston" 
            email = "samareimorgan@gmail.com"
            birthdate = "06-06-1977"  
            address = "123 Main Street, Denver, CO 80236"
            phone = "720-398-7174" 
            docname = "Dr. Whatsit"
            doccompany = "Amazing Medical Co"
            docaddress = "234 Main St, Denver, CO 80023"
            docphone = "303-249-3245"
            allergies = "sulfa, penicillin "
            medicationslist = "vitamin B12, Lipitor"/>

        </Auxiliary>
        )
    }
}

export default HotSheet;
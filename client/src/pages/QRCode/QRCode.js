import React, {Component} from "react";
import classes from "./QRCode.css";
import QRCode from "../../components/QRCode/QRCode";
import HotSheetButton from "../../components/HotSheetButton/HotSheetButton";


class Qrcode extends Component {
    // constructor(props) {
    //     super(props) 
    //         state = {
    //             name: this.props.name
    //         }
        
    // }
   
 

render () {

    return (
        <div className ={classes.QrCodeDiv}>

            <h2>Samantha Johnston</h2>
            

            <QRCode /> 
            <HotSheetButton link = "/HotSheetData"/>

        </div>
        
    )
}

};

export default Qrcode; 
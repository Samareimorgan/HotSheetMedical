import React, {Component} from "react";
import classes from "./QRCode.css";
import QRCode from "../../components/QRCode/QRCode";


class QRcode extends Component {

   


render () {

    return (
        <div>
            <span>Patient Name</span>
            <QRCode />
        </div>
        
    )
}

}

export default QRCode; 
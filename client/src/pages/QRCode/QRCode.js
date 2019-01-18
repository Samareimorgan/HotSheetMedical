import React, {Component} from "react";
import classes from "./QRCode.css";
import QRCode from "../../components/QRCode/QRCode";
import HotSheetButton from "../../components/HotSheetButton/HotSheetButton";


class QRcode extends Component {

   


render () {

    return (
        <div>
            <span>Patient Name{this.props.name}</span>
            <QRCode />

            <HotSheetButton />

        </div>
        
    )
}

}

export default QRCode; 
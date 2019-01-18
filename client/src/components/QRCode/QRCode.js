import React from "react";
import QRcode from "../../assets/Images/QRcodeimg.jpg";
import classes from "./QRCode.css";

const qrcode = props => (

    <div className ={classes.QrDiv}>
        <img src={QRcode} alt="Personal QR Code" className ={classes.QrCode}  />

    </div> 

)

export default qrcode; 
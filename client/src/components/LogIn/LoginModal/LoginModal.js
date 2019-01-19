import React from 'react';

import classes from "./LoginModal.css";
import Button from "../../Button/Button";

const modal = props => (
    <div className={`modal ${props.open ? 'open' : ''}`}>
        <header className= {classes.ModalHeader}>
            <h1>{props.title}</h1>
        </header>
        <section className={classes.ModalContent}>
            {props.children}
        </section>
        <section className={classes.ModalActions}>
            <Button type="button" onClick={props.onClose}>Okay</Button>
        </section>
    </div>
);

export default modal;
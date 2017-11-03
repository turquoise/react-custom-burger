import React from 'react';
import classes from './Modal.css';
import MyAux from '../../../hoc/myaux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <MyAux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </MyAux>

);

export default modal;

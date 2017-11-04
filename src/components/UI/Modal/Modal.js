import React, { Component } from 'react';
import classes from './Modal.css';
import MyAux from '../../../hoc/myaux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('Modal will update');
  }

  render () {
    return (
      <MyAux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </MyAux>
    )
  }
}


export default Modal;

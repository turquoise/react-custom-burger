import React from 'react';
import MyAux from '../../../hoc/myaux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map( key => {
      return (
        <li key={key}>
          <span style={ {textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>
      );
    });

  return (
    <MyAux>
      <h3>Your Order</h3>
      <p>A delicious burder with the following ingredients: </p>
      <ul>{ ingredientSummary }</ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>
    </MyAux>
  );
};

export default orderSummary;

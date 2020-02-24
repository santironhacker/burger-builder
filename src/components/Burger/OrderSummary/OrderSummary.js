import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

// Could be changed into stateful component to choose wether we want to rerender it again.
// However, as it is contained in Modal element, if we check for the modal to rerender we also check for OrderSummary.
const orderSummary = props => {
  const ingredientsSummary =
    // Get object keys
    Object.keys(props.ingredients)
      // Return an array of list items
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {props.ingredients[igKey]}
          </li>
        );
      });

  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default orderSummary;

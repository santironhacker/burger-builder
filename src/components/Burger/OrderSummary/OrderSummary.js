import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
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
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default orderSummary;

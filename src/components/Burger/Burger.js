import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  // Ingredients are passed as an object so we need to transform them to an array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // if (props.ingredients[igKey]) {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
      // }
      // return null;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log('Ingredients ', transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start addind ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

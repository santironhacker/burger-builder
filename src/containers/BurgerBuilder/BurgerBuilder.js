import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // This way is just fine but we're gonna use the state shorten version
  /* constructor(props) {
    super(props);
    this.state = {...}
  } */

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;

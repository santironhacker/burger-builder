import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {
  // This is not a pure Component. It would do more checks than we want (i.e. check prop modalClosed to have changed).
  // But if we were to manipulate the state or reassign for example listeners we definitely should check for other properties to have changed to update the component.
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props.show;
  }

  // For DEMO purposes only
  componentWillUpdate() {
    console.log('[Modal] Will update');
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          className={classes.Modal}
          style={
            ({
              transform: this.props.show
                ? 'translateY(0)'
                : 'translateY(-100vh)'
            },
            { display: this.props.show ? 'inherit' : 'none' })
          }
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

/* PREVIOUS FUNCTIONAL COMPONENT */
/* const modal = props => (
  <Auxiliary>
    <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
    <div
      className={classes.Modal}
      style={
        ({ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' },
        { display: props.show ? 'inherit' : 'none' })
      }
    >
      {props.children}
    </div>
  </Auxiliary>
); */

export default modal;

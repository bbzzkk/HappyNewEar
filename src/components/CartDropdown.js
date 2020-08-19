import React, { Component } from "react";

import CartDropdownLayout from "../styles/CartDropdownLayout";
import CustomButton from '../styles/CustomButton'

class CartDropdown extends Component {
  render() {

    return (
      <CartDropdownLayout>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </CartDropdownLayout>
    );
  }
}

export default CartDropdown;

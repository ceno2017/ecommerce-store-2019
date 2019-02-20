import React, { Component } from "react";

import {ProductConsumer} from "../../context"
import Title from "../Title";
import CardColumns from "./CardColumns";
import EmptyCart from "./Empty";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
      <ProductConsumer>
        {value=>{
          const{cart} = value;
          if(cart.length>0){
            return(
              <React.Fragment>
                <Title name="Your" title="cart" />
                <CardColumns />
                <CartList value={value} />
                <CartTotals value={value} history={this.props.history} />
              </React.Fragment>
            );
          }else{
            return(
              <EmptyCart/>
            );
          }
        }}
      </ProductConsumer>
      </section>
    );
  }
}

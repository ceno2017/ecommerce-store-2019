import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavButtonContainer } from "./navButton";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/**
      https://www.iconfinder.com/icons/3507746/card_gift_iconoteka_money_redeem_shop_shopping_icon
         Creative Commons Attribution
         www.iconfinder.com
      */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Store" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <NavButtonContainer forNav>
            <i className="fas fa-cart-plus" /> my cart
          </NavButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

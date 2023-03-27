import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_API,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_DOMAIN,
});

class ShopProvider extends Component {
  state = {
    product: {},
    products: {},
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  createCheckout = async () => {};

  fetchCheckout = async () => {};

  addItemToCheckout = async () => {};

  removeLineItem = async (lineItemIdsToRemove) => {};

  fetchAllProducts = async () => {};
  fetchProductWithHandle = async (handle) => {};

  closeCart = async () => {};
  openCart = async () => {};
  closeMenu = async () => {};
  openMenu = async () => {};

  render() {
    return <ShopContext.Provider>{this.props.children}</ShopContext.Provider>;
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;

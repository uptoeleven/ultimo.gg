import React, { Component } from "react";

// css
import "../../style/Shop/shop.scss";

// component
import Item from "./item";

// item images
import Hoodie from "../../assets/shop/hoodie.png";

class Shop extends Component {
  state = {
    items: [
      {
        image: Hoodie,
        name: "Ultimo BFG TEE - RED",
        price: "£20",
      },
      {
        image: Hoodie,
        name: "Ultimo BFG TEE - RED",
        price: "£20",
      },
      {
        image: Hoodie,
        name: "Ultimo BFG TEE - RED",
        price: "£20",
      },
      {
        image: Hoodie,
        name: "Ultimo BFG TEE - RED",
        price: "£20",
      },
      {
        image: Hoodie,
        name: "Ultimo BFG TEE - RED",
        price: "£20",
      },
      {
        image: Hoodie,
        name: "Ultimo BFG TEE - RED",
        price: "£20",
      },
    ],
  };
  render() {
    return (
      <>
        <div className='shop'>
          <div className='shop-container'>
            {this.state.items.map((item) => (
              <Item image={item.image} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Shop;

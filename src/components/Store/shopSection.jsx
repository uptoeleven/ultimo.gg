import React, { Component } from "react";

// css
import "../../style/Shop/shop.scss";

// component
import Item from "./item";

// item images
import BFGT from "../../assets/shop/bfg-t.png";
import GGB from "../../assets/shop/gg-t.png";
import GGW from "../../assets/shop/gg-t-wite.png";
import WAT from "../../assets/shop/t-warrior.png";
import Hoodie from "../../assets/shop/Hoodie.png";
import Hat from "../../assets/shop/hat.png";
import Beanie from "../../assets/shop/beanie.png";
import Mask from "../../assets/shop/mask.png";
import Mat from "../../assets/shop/mat.png";
import Pin from "../../assets/shop/pin.png";

class Shop extends Component {
  state = {
    items: [
      {
        image: BFGT,
        name: "Ultimo BFG TEE",
        price: "£28",
        url: "https://ultimomerch.com/products/bfg-t-shirt",
      },
      {
        image: GGB,
        name: "GG TEE - Black",
        price: "£25",
        url: "https://ultimomerch.com/products/ultimo-tee-2",
      },
      {
        image: GGW,
        name: "GG TEE - White",
        price: "£25",
        url: "https://ultimomerch.com/products/ultimo-tee-white",
      },
      {
        image: WAT,
        name: "Warrior TEE",
        price: "£25",
        url: "https://ultimomerch.com/products/ultimo-tee",
      },
      {
        image: Hoodie,
        name: "Ultimo Hoodie",
        price: "£45",
        url: "https://ultimomerch.com/products/ultimo-hoodie-1",
      },
      {
        image: Hat,
        name: "Ultimo Snap-Back Cap",
        price: "£30",
        url: "https://ultimomerch.com/products/ultimo-snap-back-cap-1",
      },
      {
        image: Beanie,
        name: "Ultimo Beanie",
        price: "£30",
        url: "https://ultimomerch.com/products/ultimo-beanie-1",
      },
      {
        image: Mask,
        name: "Ultimo GG Face Mask",
        price: "£12",
        url: "https://ultimomerch.com/products/ultimo-gg-face-mask",
      },
      {
        image: Mat,
        name: "Mouse Mat",
        price: "£12",
        url: "https://ultimomerch.com/products/mouse-mat",
      },
      {
        image: Pin,
        name: "Metal Pin",
        price: "£10",
        url: "https://ultimomerch.com/products/metal-pin",
      },
    ],
  };
  render() {
    return (
      <>
        <div className='shop'>
          <div className='shop-container'>
            {this.state.items.map((item) => (
              <Item
                image={item.image}
                name={item.name}
                price={item.price}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Shop;

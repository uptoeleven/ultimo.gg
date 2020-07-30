import React, { Component } from "react";

import "../../style/Shop/item.scss";

class Item extends Component {
  state = {};

  openShop = (url) => {
    window.open(url);
  };

  render() {
    return (
      <div className='item' onClick={() => this.openShop(this.props.url)}>
        <div className='item_image'>
          <img src={this.props.image} alt='item'></img>
        </div>
        <div className='item-content'>
          <div className='text-block'>
            <span>{this.props.name}</span>
            <span
              style={{
                color: "rgb(194, 92, 255)",
                letterSpacing: "1px",
                fontSize: "8px",
              }}>
              xs | s | m | l | xl
            </span>
          </div>
          <p className='price'>{this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default Item;

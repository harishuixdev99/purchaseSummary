import React, { Component } from "react";

export default class Subtotal extends Component {
  render() {
    return (
      <div className="show-grid">
        <span>Subtotal</span>
        <span className="val">{`$ ${this.props.price}`}</span>
      </div>
    );
  }
}

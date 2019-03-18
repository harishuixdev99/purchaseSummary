import React, { Component } from "react";
export default class EstimatedTotal extends Component {
  render() {
    return (
      <div>
        <span className="heading">Est. Total</span>
        <span className="heading, val">{` $${this.props.price}`}</span>
      </div>
    );
  }
}

import React, { Component } from "react";
export default class TaxesFess extends Component {
  render() {
    return (
      <div className="show-grid">
        <span>Est. taxes & fees (Based on 94085)</span>
        <span className="val">{`$${this.props.taxes}`}</span>
      </div>
    );
  }
}

import React, { Component } from "react";
import Tooltip from "../Tooltip/Tooltip";

const styles = {
  pickupSavings: {
    textDecoration: "underline",
    display: "inline-table"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};

export default class PickupSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  handleMouseHover = () => {
    this.setState({
      hover: !this.state.hover
    });
  };
  render() {
    return (
      <div className="show-grid">
        <span
          onMouseOver={this.handleMouseHover}
          onMouseOut={this.handleMouseHover}
        >
          <span style={styles.pickupSavings}>
            Pickup Savings <Tooltip hover={this.state.hover} />
          </span>
        </span>
        <span className="val" style={styles.totalSavings}>{` $${
          this.props.price
        }`}</span>
      </div>
    );
  }
}

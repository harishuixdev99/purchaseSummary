import React, { Component } from "react";

import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCode extends Component {
  state = {
    open: false
  };

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <a
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          {this.state.open === false ? `Apply ` : `Hide `} promo code
          {this.state.open === false ? `+ ` : `- `}
        </a>
        {this.state.open && (
          <div>
            <p>Promo Code</p>
            <input
              type="text"
              placeholder="Apply promo code"
              onChange={this.handleChange}
            />
            <button
              disabled={this.props.isDisabled}
              onClick={this.props.giveDiscount}
            >
              Apply
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);

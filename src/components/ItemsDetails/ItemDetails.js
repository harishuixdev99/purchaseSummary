import React, { Component, Fragment } from "react";

export default class ItemDetails extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <Fragment>
        <div>
          <a
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
          >
            {this.state.open === false ? `See ` : `Hide `} items in details
            {this.state.open === false ? `+` : ` -`}
          </a>
          {this.state.open && (
            <div className="itemDetails">
              <img
                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg"
                alt="itemDetailsImage"
                width={"auto"}
                height={100}
              />
              <div>
                <p>
                  OFM Essentials Racecar-Style Leather Gaming Chair, Multiple
                  Colors
                </p>
                <span>
                  <strong> {`$${this.props.price}`} </strong>
                </span>
                <br />
                <strong className="price-stripe">
                  {" "}
                  {`$${this.props.price}`}{" "}
                </strong>
                <span>Qty: 1</span>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

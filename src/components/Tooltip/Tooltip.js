import React from "react";

const Tooltip = props => {
  return (
    <React.Fragment>
      {props.hover ? (
        <div className="TooltipText">
          Picking up your order in the store helps cut costs, and we pass the
          savings to you.
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Tooltip;

import React, { Component } from "react";
import { ToolTip, ToolTipWrapper } from "./styles";
import { string, arrayOf, number, bool } from "prop-types";
import { generate } from "shortid";
import { UP } from "../../../utils/constants";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.id = generate();
  }

  componentDidMount() {
    const el = document.getElementById(this.id);
    const { height } = el.getBoundingClientRect();
    this.setState({ height });
  }

  render() {
    const { texts, position, children, width, disabled, dataTest } = this.props;
    const { height } = this.state;

    return (
      <ToolTipWrapper disabled={disabled}>
        <ToolTip
          id={this.id}
          data-test={dataTest}
          height={height}
          width={width}
          position={position}
        >
          {texts.map(text => (
            <div key={generate()}>{text}</div>
          ))}
        </ToolTip>
        {children}
      </ToolTipWrapper>
    );
  }
}

Tooltip.defaultProps = {
  texts: [],
  position: UP,
  disabled: false
};

Tooltip.propTypes = {
  texts: arrayOf(string),
  position: string,
  width: number,
  disabled: bool
};

export default Tooltip;

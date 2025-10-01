import React, { Component } from "react";
import { string, shape, func, bool, oneOfType, object } from "prop-types";

import Icon from "../Icon";
import { Wrapper, Text, IconWrapper } from "./styles.js";
import { white } from "../../../styles/settings";

class Toastr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };

    this.toggle = this.toggle.bind(this);
    this.listen = this.listen.bind(this);
  }

  toggle() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  listen() {
    this.props.history.listen(this.props.closeToastr);
  }

  componentWillMount() {
    this.listen();
  }

  componentDidMount() {
    this.toggle();
  }

  componentWillUnmount() {
    this.listen();
  }

  render() {
    const { toastrSettings, closeToastr, cancelTimeout } = this.props;
    const { mounted } = this.state;

    const toastrTimeout = setTimeout(() => {
      closeToastr();
    }, toastrSettings.timeout || 3000);
    if (cancelTimeout) {
      clearTimeout(toastrTimeout);
    }

    return (
      <Wrapper
        opened={mounted && toastrSettings}
        warning={toastrSettings.warning}
        error={toastrSettings.error}
        noClose={toastrSettings.noClose}
        onClick={toastrSettings.noClose ? null : closeToastr}
      >
        <Text data-test="Toastr">{toastrSettings && toastrSettings.text}</Text>
        <IconWrapper data-test="ToastrClose">
          {toastrSettings.noClose ? null : (
            <Icon type="ToastrClose" color={white} />
          )}
        </IconWrapper>
      </Wrapper>
    );
  }
}

Toastr.defaultProps = {
  toastrSettings: false
};

Toastr.propTypes = {
  toastrSettings: oneOfType([
    bool,
    shape({
      text: string
    }).isRequired
  ]),
  history: shape({
    location: object,
    listen: func
  }).isRequired,
  closeToastr: func.isRequired
};

export default Toastr;

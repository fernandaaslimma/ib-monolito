import React, { Component } from "react";
import {
  RegistratoWrapper,
  Title,
  Text,
  InnerContainer,
  Box,
  Form,
  Feedback,
  FormContent,
  ErrorSubtext,
  ErrorText
} from "./styles";
import Card from "../common/Card/";
import Input from "../common/Input/";
import Button from "../common/Button/";
import { Container } from "../../styles/grid/";
import { translate } from "../../utils/i18n";
import { validateSecurityPhrase } from "../../services/registrato";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const bcbUrl = "http://www.bcb.gov.br/?REGISTRATO";

class Registrato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      securityCode: "",
      loading: false,
      success: false,
      error: false
    };
    this.handleUserInputFactory = this.handleUserInputFactory.bind(this);
    this.submitSecurityCode = this.submitSecurityCode.bind(this);
    this.renderFeedback = this.renderFeedback.bind(this);
    this.securityCodeIsValid = this.securityCodeIsValid.bind(this);
  }

  handleUserInputFactory(stateKey) {
    return e => {
      this.setState({
        success: false,
        error: false,
        [stateKey]: e.target.value
      });
    };
  }

  submitSecurityCode(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    return validateSecurityPhrase(this.state.securityCode)
      .then(() => {
        this.setState({
          success: true,
          error: false,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          success: false,
          loading: false
        });
      });
  }

  renderFeedback() {
    if (this.state.success) {
      return (
        <Feedback type="success">
          {translate("REGISTRATO_RETURN_SUCCESS_1")}
          {bcbUrl}
          {translate("REGISTRATO_RETURN_SUCCESS_2")}
        </Feedback>
      );
    }

    if (this.state.error) {
      return (
        <Feedback type="error">
          <ErrorText>{translate("REGISTRATO_RETURN_FAILED_1")}</ErrorText>
          <ErrorSubtext>
            {" "}
            - {translate("REGISTRATO_RETURN_FAILED_2")}
          </ErrorSubtext>
          <ErrorSubtext>
            {" "}
            - {translate("REGISTRATO_RETURN_FAILED_3")}
          </ErrorSubtext>
        </Feedback>
      );
    }

    return null;
  }

  securityCodeIsValid() {
    return this.state.securityCode.length > 0;
  }

  render() {
    return (
      <ErrorBoundary>
        <RegistratoWrapper data-test="RegistratoPage">
          <Container>
            <Title>{translate("REGISTRATO_MAIN_TITLE")}</Title>
            <Card>
              <InnerContainer>
                <Text>{translate("REGISTRATO_DISCLAIMER")}</Text>
                <Text>{translate("REGISTRATO_DISCLAIMER_OPTION_A")}</Text>
                <Text>{translate("REGISTRATO_DISCLAIMER_OPTION_B")}</Text>
                <Text>{`${translate("REGISTRATO_MORE_INFO")} ${bcbUrl}`}</Text>
                <Box>
                  <Form onSubmit={this.submitSecurityCode}>
                    <FormContent>
                      <Input
                        hasValidation={false}
                        data-test="RegistratoInput"
                        onChange={this.handleUserInputFactory("securityCode")}
                        type="text"
                        name="securityCode"
                        value={this.state.securityCode}
                        maxLength="50"
                        label={translate("REGISTRATO_INPUT_PLACEHOLDER")}
                      />
                      <Button
                        disabled={!this.securityCodeIsValid()}
                        data-test="RegistratoButton"
                        type="submit"
                        isCallToAction={true}
                        loading={this.state.loading}
                      >
                        {translate("REGISTRATO_BUTTON")}
                      </Button>
                    </FormContent>
                    {this.renderFeedback()}
                  </Form>
                </Box>
              </InnerContainer>
            </Card>
          </Container>
        </RegistratoWrapper>
      </ErrorBoundary>
    );
  }
}

export default Registrato;

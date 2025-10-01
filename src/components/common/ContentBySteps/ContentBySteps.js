import React, { Component, Fragment } from "react";
import { string, array, func } from "prop-types";
import { Content, ContentWrapper, Buttons } from "./styles";

import { translate } from "../../../utils/i18n";
import Button from "../Button";
import NavigationBySteps from "../NavigationBySteps";

class ContentBySteps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1
    };

    this.goToStep = this.goToStep.bind(this);
  }

  goToStep(step) {
    const { stepJumpSupportFunc } = this.props;
    this.setState({
      activeStep: step
    });

    stepJumpSupportFunc && stepJumpSupportFunc(step);
  }

  componentDidMount() {
    const { currentStep } = this.props;
    currentStep && this.setState({ activeStep: currentStep });
  }

  render() {
    const {
      data,
      renderStepData,
      disabledNextButtons,
      finishForm
    } = this.props;
    const { activeStep } = this.state;
    const stepsLength = data.length;

    return (
      <Fragment>
        <NavigationBySteps
          length={stepsLength}
          active={activeStep}
          goToStep={this.goToStep}
        />
        <ContentWrapper
          widthMultiplier={stepsLength}
          active={activeStep}
          onSubmit={this.onSubmit}
        >
          {data.map((object, index) => {
            const stepData = data.find(item => item.step == index + 1);
            const stepId = `step_${stepData.step}`;

            return (
              <Content key={`content_${index}`} active={activeStep}>
                {renderStepData(stepData.data, stepId)}

                <Buttons>
                  {activeStep > 1 && (
                    <Button
                      onClick={() => this.goToStep(activeStep - 1)}
                      disabled={activeStep === 1}
                    >
                      {translate("PREVIOUS")}
                    </Button>
                  )}

                  {activeStep < stepsLength && (
                    <Button
                      onClick={() => this.goToStep(activeStep + 1)}
                      disabled={
                        disabledNextButtons[`step_${this.state.activeStep}`] ===
                        false
                      }
                    >
                      {translate("NEXT")}
                    </Button>
                  )}

                  {activeStep === stepsLength && (
                    <Button
                      onClick={() => finishForm()}
                      disabled={
                        disabledNextButtons[`step_${this.state.activeStep}`] ===
                        false
                      }
                    >
                      {translate("FINISH")}
                    </Button>
                  )}
                </Buttons>
              </Content>
            );
          })}
        </ContentWrapper>
      </Fragment>
    );
  }
}

ContentBySteps.defaultProps = {
  data: []
};

ContentBySteps.propTypes = {
  data: array.isRequired,
  renderStepData: func.isRequired,
  stepJumpSupportFunc: func,
  finishForm: func.isRequired,
  stepBy: string.isRequired,
  disabledNext: array
};

export default ContentBySteps;

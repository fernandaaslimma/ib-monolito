import React, { Component, Fragment } from "react";
import { func, object } from "prop-types";
import {
  Wrapper,
  InnerWrapContent,
  Title,
  ColumnTitle,
  ColumnTitles,
  InnerContent
} from "./styles";

import SuitabilityFormResult from "../SuitabilityFormResult";
import RadioButton from "../../common/RadioButton";
import CompositeInput from "../../common/CompositeInput";
import ContentBySteps from "../../common/ContentBySteps";
import SingleChoiceListInput from "../../common/SingleChoiceListInput";
import { refreshToken } from "../../../services/login";
import { translate } from "../../../utils/i18n";

import {
  setAccessToken,
  setRefreshToken,
  setSessionExpirationTime
} from "../../../utils/token";

import { checkViewContextAndRedirect } from "../../../utils/fetchHandler";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import Header from "../../common/Modal/Header";
import { rem } from "../../../styles/tools";

import {
  PERCENTAGE_COMPOSITION,
  PERCENTAGE_COMPOSITION_ANSWER,
  PERCENTAGE_COMPOSITION_ANSWER_$TYPE,
  SINGLE_CHOICE,
  SINGLE_CHOICE_ANSWER,
  SINGLE_CHOICE_ANSWER_$TYPE,
  TABLE_SINGLE_CHOICE,
  TABLE_SINGLE_CHOICE_ANSWER,
  TABLE_SINGLE_CHOICE_ANSWER_$TYPE,
  SINGLE_CHOICE_LIST,
  SINGLE_CHOICE_LIST_ANSWER,
  SINGLE_CHOICE_LIST_ANSWER_$TYPE,
  SUITABILITY_NOTIFICATION_TYPE
} from "../../../utils/constants";
import ExitConfirmation from "../../common/ExitConfirmation";
import { redirect } from "../../../utils/redirect";

class SuitabilityForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formModel: [],
      isExiting: false,
      currentStep: 1,
      loading: true
    };

    this.fill = [];
    this.isDisabled = true;
    this.onChange = this.onChange.bind(this);
    this.changeFormModel = this.changeFormModel.bind(this);
    this.changeComposite = this.changeComposite.bind(this);
    this.changeChoiceList = this.changeChoiceList.bind(this);
    this.openSuitabilityFormResult = this.openSuitabilityFormResult.bind(this);
    this.onStepJump = this.onStepJump.bind(this);
    this.renderExitConfirmation = this.renderExitConfirmation.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onStepJump(step) {
    this.setState({ currentStep: step });
    refreshToken()
      .then(resp => resp.json())
      .then(resp => {
        if (resp.access_token && resp.refresh_token) {
          setAccessToken(resp.access_token);
          setRefreshToken(resp.refresh_token);
          setSessionExpirationTime(resp.session_expires_in);
        }
      })
      .catch(() => {
        checkViewContextAndRedirect();
      });
  }

  async componentDidMount() {
    const { getSuitabilityFormData, getSuitabilityFormId } = this.props;

    await getSuitabilityFormId();
    await getSuitabilityFormData(this.props.suitabilityForm.formId);

    this.setState({ loading: false });
  }

  onChange(optionId, modelStepParams) {
    this.fill[modelStepParams.stepId] = true;

    const answer = {
      selectedOptionId: optionId,
      questionId: modelStepParams.id,
      className: modelStepParams.className,
      $type: modelStepParams.$type
    };

    this.changeFormModel(answer);
  }

  changeComposite(composition, hasToChangeModel, stepId, id) {
    this.fill[stepId] = hasToChangeModel;
    const answer = {
      components: composition,
      questionId: id,
      className: PERCENTAGE_COMPOSITION_ANSWER,
      $type: PERCENTAGE_COMPOSITION_ANSWER_$TYPE
    };
    this.changeFormModel(answer);
  }

  changeChoiceList(hasEmptyAnswer, answerCollection, id, stepId) {
    const answer = {
      answers: answerCollection,
      questionId: id,
      className: SINGLE_CHOICE_LIST_ANSWER,
      $type: SINGLE_CHOICE_LIST_ANSWER_$TYPE
    };

    this.changeFormModel(answer);
    hasEmptyAnswer.length
      ? (this.fill[stepId] = false)
      : (this.fill[stepId] = true);
  }

  changeFormModel(answer) {
    const newState = Object.assign({}, this.state);
    let hasAnswer = newState.formModel.findIndex(
      item => item.questionId === answer.questionId
    );

    hasAnswer != -1
      ? (newState.formModel[hasAnswer] = answer)
      : newState.formModel.push(answer);

    this.setState(newState);
  }

  isChecked(id, value) {
    const item = this.state.formModel.find(item => item.questionId == id);
    return (item && item.selectedOptionId === value) || false;
  }

  openSuitabilityFormResult() {
    const {
      openModal,
      closeModal,
      getSuitabilityResult,
      suitabilityFormData
    } = this.props;

    const formParams = {
      formVersionId: suitabilityFormData.id,
      answers: this.state.formModel
    };

    getSuitabilityResult(formParams).then(() => {
      closeModal();
      openModal({
        width: rem(1100),
        type: MODAL_TYPES.PAGE_AS_MODAL,
        children: () => <SuitabilityFormResult />
      });
    });
  }

  renderExitConfirmation() {
    return (
      <ExitConfirmation
        onClickExit={() => this.handleClose()}
        onClickCancel={() => this.setState({ isExiting: false })}
      />
    );
  }

  handleClose() {
    const { setNotificationStatus, closeModal } = this.props;
    closeModal();
    redirect("/home");
    setNotificationStatus(SUITABILITY_NOTIFICATION_TYPE);
  }

  renderDinamicContent(stepContent, stepId) {
    {
      if (!this.fill[stepId]) {
        this.fill[stepId] = false;
      }

      const buildSingleChoice = (className, type) => {
        const modelStepParams = {
          stepId,
          id: stepContent.id,
          className: className,
          $type: type
        };
        return stepContent.options.map((option, index) => (
          <RadioButton
            key={index}
            label={option.value}
            onChange={() => this.onChange(option.id, modelStepParams)}
            checked={this.isChecked(stepContent.id, option.id)}
          />
        ));
      };

      const buildContent = () => {
        switch (stepContent.className) {
          case SINGLE_CHOICE: {
            return buildSingleChoice(
              SINGLE_CHOICE_ANSWER,
              SINGLE_CHOICE_ANSWER_$TYPE
            );
          }
          case PERCENTAGE_COMPOSITION: {
            return (
              <CompositeInput
                inputs={stepContent.components}
                total={100}
                hint="%"
                changeComposite={(answers, hasToChangeModel) =>
                  this.changeComposite(
                    answers,
                    hasToChangeModel,
                    stepId,
                    stepContent.id
                  )
                }
              />
            );
          }
          case TABLE_SINGLE_CHOICE: {
            return (
              <Fragment>
                <ColumnTitles>
                  {stepContent.columns.map(column => (
                    <ColumnTitle key={column}>{column}</ColumnTitle>
                  ))}
                </ColumnTitles>
                {buildSingleChoice(
                  TABLE_SINGLE_CHOICE_ANSWER,
                  TABLE_SINGLE_CHOICE_ANSWER_$TYPE
                )}
              </Fragment>
            );
          }
          case SINGLE_CHOICE_LIST: {
            return (
              <SingleChoiceListInput
                inputs={stepContent.questions}
                changeChoiceList={(hasEmpty, answerCollection) =>
                  this.changeChoiceList(
                    hasEmpty,
                    answerCollection,
                    stepContent.id,
                    stepId
                  )
                }
              />
            );
          }
          default:
            break;
        }
      };

      return (
        <Fragment>
          <Title>{stepContent.title}</Title>
          <InnerContent
            data-test={`suitability_${stepId}`}
            block={!stepContent.components && !stepContent.questions}
          >
            {buildContent()}
          </InnerContent>
        </Fragment>
      );
    }
  }

  render() {
    const { suitabilityFormData } = this.props;
    const { loading, isExiting, currentStep } = this.state;

    return (
      <Wrapper>
        <Header
          title={translate("KEEP_YOUR_SUITABILITY_UP_TO_DATE")}
          dataTest="suitability-data-close"
          onClickClose={() => this.setState({ isExiting: true })}
        />
        {isExiting && this.renderExitConfirmation()}
        {!isExiting && (
          <InnerWrapContent>
            {loading && <DefaultShimmerLoading repeat={3} innerRepeat={4} />}
            {Object.entries(suitabilityFormData).length > 0 && (
              <ContentBySteps
                data={suitabilityFormData.steps}
                stepBy="step"
                renderStepData={(stepContent, stepId) =>
                  this.renderDinamicContent(stepContent, stepId)
                }
                disabledNextButtons={this.fill}
                finishForm={this.openSuitabilityFormResult}
                stepJumpSupportFunc={this.onStepJump}
                currentStep={currentStep}
              />
            )}
          </InnerWrapContent>
        )}
      </Wrapper>
    );
  }
}

SuitabilityForm.defaultProps = {
  suitabilityFormData: {}
};

SuitabilityForm.propTypes = {
  suitabilityFormData: object,
  getSuitabilityFormData: func.isRequired
};

export default SuitabilityForm;

import React, { Component, Fragment } from "react";
import { func, object } from "prop-types";
import {
  Wrapper,
  InnerWrapContent,
  UserInformation,
  Greeting,
  Warning,
  BasicInfo,
  Understatement,
  TokenWrapper,
  WrapperAlert,
  TextBold,
  WrapperText
} from "./styles";

import { translate } from "../../../utils/i18n";
import deepClone from "../../../utils/deepClone";
import RegistrationDataFormResult from "../RegistrationDataFormResult";

import FinancialInformation from "./FinancialInformation";
//import ForeignAccountTaxCA from "./ForeignAccountTaxCA";
//import PurposeWithInstitution from "./PurposeWithInstitution";
import CorrespondenceAndContacts from "./CorrespondenceAndContacts";
import PersonalDetails from "./PersonalDetails";
//import RepresentationAuthorization from "./RepresentationAuthorization";
//import ProfessionalInfo from "./ProfessionalInfo";
//import OtherNationality from "./OtherNationality";
//import RelatedPerson from "./RelatedPerson";
//import PoliticallyExposedPerson from "./PoliticallyExposedPerson";

import Header from "../../common/Modal/Header";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import { rem } from "../../../styles/tools";

import {
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  ACTION_TYPE_PERSON_REGISTRATION_CONFIRM_INFORMATION,
  UPDATE_PERSON_REGISTRATION,
  CONFIRM_PERSONAL_REGISTRATION
} from "../../../utils/constants";
import { formatCPF } from "../../../utils/formatNumber";
import { Button, AlertMessage } from "react-bocombbm-components";
import EFTToken from "../../common/EFTToken";
import ExitConfirmation from "../../common/ExitConfirmation";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import { redirect } from "../../../utils/redirect";
import checkForSectionFillCompletion, {
  validateAllRegistration
} from "./registrationDataFormValidator";
import FormAgreement from "./FormAgreement";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";
import { formatDateToLocale } from "../../../utils/formatDate";
import { scrollToTop } from "../../../utils/dom";

export const StateContext = React.createContext(null);

class RegistrationDataForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formModel: null,
      shimmerLoding: true,
      agree: true,
      isAuthenticating: false,
      isExiting: false,
      personalDataToken: null,
      loading: false,
      isFilled: {},
      submitUpdatedForm: false,
      temporaryInvalidFields: {},
      closeAll: null,
      canUpdate: null,
      isImpersonating: null
    };

    this.changeFormModel = this.changeFormModel.bind(this);
    this.personalInfomation = this.personalInfomation.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.setRegistrationAgreement = this.setRegistrationAgreement.bind(this);
    this.prepareSubmission = this.prepareSubmission.bind(this);
    this.validateSection = this.validateSection.bind(this);
    this.openAuth = this.openAuth.bind(this);
  }

  async componentWillMount() {
    const { getRegistrationFormData, getNotification, userInfo } = this.props;

    await getRegistrationFormData();
    await getNotification();

    this.registrationDataNotification = this.props.notification.find(
      item => item.type === REGISTRATION_DATA_NOTIFICATION_TYPE
    );

    const clonedRegistrationData = deepClone(this.props.registrationFormData);
    clonedRegistrationData.content.documents = {};

    const canUpdate =
      typeof MOBILEAPP_Logout === "function" // eslint-disable-line
        ? __SHOW_EDITABLE_REGISTRATION_CONTENT_MOBILE__ === "true" &&
          checkIfHasAccess(userInfo, [UPDATE_PERSON_REGISTRATION])
        : checkIfHasAccess(userInfo, [UPDATE_PERSON_REGISTRATION]);

    const isImpersonating = !checkIfHasAccess(
      userInfo,
      [UPDATE_PERSON_REGISTRATION, CONFIRM_PERSONAL_REGISTRATION],
      true
    );

    this.setState({
      formModel: clonedRegistrationData,
      shimmerLoding: false,
      canUpdate,
      isImpersonating
    });
  }

  async openAuth(isFormEqual) {
    const {
      postConfirmRegistrationFormData,
      postUpdateRegistrationFormData
    } = this.props;
    this.setState({ loading: true });

    isFormEqual
      ? await postConfirmRegistrationFormData()
      : await postUpdateRegistrationFormData(this.state.formModel.content);

    this.setState({
      personalDataToken: isFormEqual
        ? this.props.dataPersonalRegistration.confirmationToken
        : this.props.dataPersonalRegistration.updateToken,
      submitUpdatedForm: !isFormEqual,
      isAuthenticating: true
    });
  }

  async submitRegistration() {
    const {
      openModal,
      closeModal,
      putConfirmRegistrationFormData,
      putUpdateRegistrationFormData
    } = this.props;
    const { agree } = this.state;

    this.state.submitUpdatedForm
      ? await putUpdateRegistrationFormData()
      : await putConfirmRegistrationFormData(!!agree);

    closeModal();
    openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: rem(800),
      children: () => <RegistrationDataFormResult />
    });
  }

  isFormDataEmpty() {
    return !this.props.registrationFormData;
  }

  validateSection(changedInfo, section) {
    const { formModel, canUpdate } = this.state;
    //isFilled is a boolean except for documents that is an object
    const isFilled = canUpdate
      ? checkForSectionFillCompletion(changedInfo, section, formModel.content)
      : true;

    this.setState(prevState => ({
      isFilled: {
        ...prevState.isFilled,
        [section]: isFilled
      },
      closeAll: null
    }));
  }

  changeFormModel(changedInfo, section) {
    this.setState(prevState => ({
      formModel: {
        ...prevState.formModel,
        content: {
          ...prevState.formModel.content,
          [section]: changedInfo
        }
      }
    }));
  }

  setRegistrationAgreement(hasAgreed) {
    this.setState({
      agree: hasAgreed
    });
  }

  personalInfomation(personalRegistrationDetails) {
    return (
      <Fragment>
        <b>{personalRegistrationDetails.name}</b>
        {`, ${translate("ATUCAD_ID_NUMBER")} `}
        <b>{personalRegistrationDetails.documentNumber}</b>
        {personalRegistrationDetails.documentIssuingBody && (
          <Fragment>
            {`, ${translate("ATUCAD_ISSUED_BY")} `}
            <b>{personalRegistrationDetails.documentIssuingBody}</b>
          </Fragment>
        )}
        {personalRegistrationDetails.documentDateOfIssue && (
          <Fragment>
            {`, ${translate("ATUCAD_ON")} `}
            <b>
              {formatDateToLocale(
                personalRegistrationDetails.documentDateOfIssue
              )}
            </b>
          </Fragment>
        )}
        {`, ${translate("ATUCAD_AND_CPF_NUMBER")} `}
        <b>{formatCPF(personalRegistrationDetails.cpf)}.</b>
      </Fragment>
    );
  }

  prepareSubmission() {
    this.setState({
      temporaryInvalidFields: {}
    });

    const { isValidatedBySection, invalidsBySection } = validateAllRegistration(
      this.state.formModel.content
    );

    const validated = Object.values(isValidatedBySection).every(item => {
      if (typeof item === "object") {
        const keys = Object.keys(item);
        return keys.every(key => item[key]);
      }
      return item;
    });

    if (!validated) {
      setTimeout(() => {
        this.props.openToastr({
          text: translate("REQUIRED_FIELDS_OMMITED"),
          error: true,
          timeout: 5000
        });
        this.setState({
          temporaryInvalidFields: invalidsBySection,
          isFilled: isValidatedBySection
        });
        scrollToTop();
      }, 500);
      return this.setState({
        closeAll: true
      });
    }

    this.props.registrationFormData.content.documents = {};

    const equalityFormsCheck =
      JSON.stringify(this.props.registrationFormData) ===
      JSON.stringify(this.state.formModel);

    validated && this.openAuth(equalityFormsCheck);
  }

  renderRegistrationDataForm() {
    const {
      personalRegistrationDetails,
      //taxResidences,
      contacts
      //fatcaInformation,
      //attorneysInFact
    } = this.props.registrationFormData.content;

    const { formModel, agree, canUpdate, isImpersonating } = this.state;
    const fomModelContent = formModel["content"];

    return (
      <Fragment>
        <UserInformation>
          <Greeting>
            {translate("ATUCAD_HELLO")}, {personalRegistrationDetails.name}
          </Greeting>
          <Warning>{translate("ATUCAD_READ_BELOW")}</Warning>
          <BasicInfo>
            {Object.keys(personalRegistrationDetails).length > 0 &&
              this.personalInfomation(personalRegistrationDetails)}
          </BasicInfo>
        </UserInformation>
        <InnerWrapContent>
          {fomModelContent.personalRegistrationDetails && (
            <PersonalDetails
              onChange={this.changeFormModel}
              validateSection={this.validateSection}
              disabled={!canUpdate}
            />
          )}

          {fomModelContent.contacts && (
            <CorrespondenceAndContacts
              originalData={contacts}
              onChange={this.changeFormModel}
              validateSection={this.validateSection}
              disabled={!canUpdate}
            />
          )}

          {/* {(canUpdate || isImpersonating) &&
            fomModelContent.professionalInformation && (
              <ProfessionalInfo
                formModel={fomModelContent}
                onChange={this.changeFormModel}
                validateSection={this.validateSection}
                isFilled={isFilled}
                invalidFields={temporaryInvalidFields.professionalInformation}
                disabled={!canUpdate || isImpersonating}
              />
            )} */}

          {/* {fomModelContent.representationAuthorization !== null && (
            <RepresentationAuthorization
              formModel={fomModelContent}
              originalData={attorneysInFact}
              onChange={this.changeFormModel}
              isFilled={isFilled}
              validateSection={this.validateSection}
              invalidFields={temporaryInvalidFields}
              disabled={!canUpdate}
            />
          )} */}

          {/* {(canUpdate || isImpersonating) &&
            fomModelContent.politicallyExposedPerson && (
              <PoliticallyExposedPerson
                formModel={fomModelContent}
                onChange={this.changeFormModel}
                validateSection={this.validateSection}
                invalidFields={temporaryInvalidFields.politicallyExposedPerson}
                isFilled={isFilled}
                disabled={!canUpdate || isImpersonating}
              />
            )} */}

          {/* {(canUpdate || isImpersonating) &&
            fomModelContent.relatedPersonInformation && (
              <RelatedPerson
                formModel={fomModelContent}
                onChange={this.changeFormModel}
                validateSection={this.validateSection}
                isFilled={isFilled}
                invalidFields={temporaryInvalidFields.relatedPersonInformation}
                disabled={!canUpdate || isImpersonating}
              />
            )} */}

          {/* {fomModelContent.purposeWithTheInstitution && (
            <PurposeWithInstitution
              formModel={fomModelContent}
              onChange={this.changeFormModel}
              isFilled={isFilled}
              invalidFields={temporaryInvalidFields.purposeWithTheInstitution}
              validateSection={this.validateSection}
              disabled={!canUpdate}
            />
          )} */}

          {/* {fomModelContent.taxResidences && (
            <OtherNationality
              formModel={fomModelContent}
              originalData={taxResidences}
              onChange={this.changeFormModel}
              isFilled={isFilled}
              validateSection={this.validateSection}
              invalidFields={temporaryInvalidFields}
              disabled={!canUpdate}
            />
          )} */}

          {/* {(canUpdate || isImpersonating) &&
            fomModelContent.fatcaInformation && (
              <ForeignAccountTaxCA
                formModel={fomModelContent}
                onChange={this.changeFormModel}
                isFilled={isFilled}
                originalData={fatcaInformation}
                invalidFields={temporaryInvalidFields}
                validateSection={this.validateSection}
                disabled={!canUpdate || isImpersonating}
              />
            )} */}

          {fomModelContent.investmentDetails && (
            <FinancialInformation
              onChange={this.changeFormModel}
              validateSection={this.validateSection}
              disabled={!canUpdate}
            />
          )}
        </InnerWrapContent>
        <WrapperAlert>
          <AlertMessage icon="Attention" type="neutral">
            <WrapperText>
              <TextBold>{translate("ATUCAD_ALERT_MESSAGE")}</TextBold>
              <span>{translate("ATUCAD_ALERT_MESSAGE_2")}</span>
            </WrapperText>
          </AlertMessage>
        </WrapperAlert>
        <Understatement>
          {canUpdate ? (
            <Button
              dataTest="registration-data-form-confirm"
              spacing={{ top: "l" }}
              type="conclusive"
              onClick={this.prepareSubmission}
              loading={this.state.loading}
            >
              {translate("ATUCAD_UPDATE_INFORMATION")}
            </Button>
          ) : !isImpersonating ? (
            <FormAgreement
              agree={agree}
              onAgree={this.setRegistrationAgreement}
              onSubmit={this.openAuth}
              loading={this.state.loading}
            />
          ) : null}
        </Understatement>
      </Fragment>
    );
  }

  renderMFA() {
    const params = {
      actionType: ACTION_TYPE_PERSON_REGISTRATION_CONFIRM_INFORMATION,
      payload: {
        id: this.state.personalDataToken,
        informationChanged: !this.state.agree
      }
    };

    return (
      <TokenWrapper>
        <EFTToken
          resendFunc={e => e.preventDefault()}
          onMFAConfirmation={() => this.submitRegistration()}
          createAuthCodeParams={params}
          mfaTokenValidated={this.props.mfaTokenValidated}
          onMFAError={() => {}}
        />
      </TokenWrapper>
    );
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

    setNotificationStatus(REGISTRATION_DATA_NOTIFICATION_TYPE);
    redirect("/home");
  }

  render() {
    const { isAuthenticating, isExiting, shimmerLoding } = this.state;
    const { methodChanging } = this.props;

    if (this.isFormDataEmpty()) {
      return null;
    }

    return (
      <StateContext.Provider value={this.state}>
        <Wrapper>
          {!isExiting ? (
            <Header
              title={
                !this.props.methodChanging
                  ? translate("ATUCAD_KEEP_YOUR_REGISTRATION_UP_TO_DATE")
                  : null
              }
              onClickClose={() => this.setState({ isExiting: true })}
              onClickBack={
                methodChanging
                  ? () => this.props.changeFactorTogle(false)
                  : null
              }
              dataTest="registration-data-close"
            />
          ) : (
            <Header
              title={translate("ATUCAD_KEEP_YOUR_REGISTRATION_UP_TO_DATE")}
              dataTest="registration-data-close"
            />
          )}
          {shimmerLoding && (
            <DefaultShimmerLoading repeat={3} innerRepeat={4} />
          )}
          {isExiting && this.renderExitConfirmation()}
          {isAuthenticating && !isExiting && this.renderMFA()}
          {this.state.formModel &&
          Object.keys(this.state.formModel).length > 0 &&
          !isAuthenticating &&
          !isExiting
            ? this.renderRegistrationDataForm()
            : null}
        </Wrapper>
      </StateContext.Provider>
    );
  }
}

RegistrationDataForm.propTypes = {
  registrationFormData: object,
  getRegistrationFormData: func.isRequired
};

export default RegistrationDataForm;

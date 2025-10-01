import React, { Fragment } from "react";
import { translate } from "../../../../utils/i18n";
import { Agreement, BasicInfo } from "../styles";
import Radio from "../../../common/Radio";
import { Button } from "react-bocombbm-components";

function FormAgreement({ agree, onAgree, onSubmit, loading }) {
  return (
    <Fragment>
      <Agreement>
        <BasicInfo emphasis>
          {translate("ATUCAD_CONFIRM_THAT_ABOVE_DATA_REMAIN_UNCHANGED")}
          <br />
          <br />
        </BasicInfo>
        <Radio
          dataTest="registration-data-form-agree"
          dataTestLabel="label-registration-data-form-agree"
          label={translate("ATUCAD_I_AGREE")}
          onChange={() => onAgree(true)}
          name="authorizationRadio"
          checked={agree !== undefined && agree}
        />
        <Radio
          dataTest="registration-data-form-dont-agree"
          dataTestLabel="label-registration-data-form-dont-agree"
          label={translate("ATUCAD_I_DO_NOT_AGREE")}
          onChange={() => onAgree(false)}
          name="authorizationRadio"
          checked={agree !== undefined && !agree}
        />
      </Agreement>
      <Button
        dataTest="registration-data-form-read-confirm"
        spacing={{ top: "l" }}
        disabled={agree === undefined}
        onClick={onSubmit}
        loading={loading}
        type="conclusive"
      >
        {translate("ATUCAD_SUBMIT")}
      </Button>
    </Fragment>
  );
}

export default FormAgreement;

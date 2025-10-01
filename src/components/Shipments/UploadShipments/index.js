import { connect } from "redux-zero/react";
import UploadShipments from "./UploadShipments";
import remittancesAction from "../../../actions/shipments/remittances";

export default connect(
  ({
    error,
    remittances,
    remittancesPostDTO,
    postRemittancesResponseError,
    remittanceBasicInfo,
    userInfo
  }) => ({
    error,
    remittances,
    remittancesPostDTO,
    postRemittancesResponseError,
    remittanceBasicInfo,
    userInfo
  }),
  remittancesAction
)(UploadShipments);

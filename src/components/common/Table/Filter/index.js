import { connect } from "redux-zero/react";

import Filter from "./Filter";
import actions from "../../../../actions/filter";

export default connect(
  ({
    filter,
    onChangeOption,
    onChangeDateFrom,
    onChangeDateRange,
    setProps
  }) => ({
    filter,
    onChangeOption,
    onChangeDateFrom,
    onChangeDateRange,
    setProps
  }),
  actions
)(Filter);

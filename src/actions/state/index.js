import commonState from "../../utils/store/commonState";

export default () => ({
  initStateIfEmpty: state => {
    if (Object.keys(state).length === 0 && state.constructor === Object) {
      return commonState;
    }
  }
});

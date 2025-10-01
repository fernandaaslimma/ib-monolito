import { connect } from "redux-zero/react";
import VirtualKeyboard from "./VirtualKeyboard";
import VirtualKeyboardInput from "./VirtualKeyboardInput";
import actions from "../../../actions/virtualkeyboard";

const ConnectedKeyboard = connect(({ virtualKeyboardConfig }) => ({
  virtualKeyboardConfig
}))(VirtualKeyboard);
ConnectedKeyboard.Input = connect(
  null,
  actions
)(VirtualKeyboardInput);

export default ConnectedKeyboard;

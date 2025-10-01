import React from "react";
import { string, func, array, number } from "prop-types";
import {
  CompositeInputList,
  CompositeInputItem,
  InputItem,
  Label,
  CompositeInputTotal
} from "./styles";

import { translate } from "../../../utils/i18n";

let answerCollection = [];
let percentCounter = 0;

function CompositeInput({ inputs, total, hint, changeComposite }) {
  const setValue = (e, inputId) => {
    if (e.target.value > 100) {
      e.target.value = 100;
    } else if (e.target.value < 0) {
      e.target.value = 0;
    }

    const input = getCurrentInput(inputId);
    input.value = Number(e.target.value / 100);

    makePercentSummatory() !== 100
      ? changeComposite(answerCollection, false)
      : changeComposite(answerCollection, true);
  };

  const makePercentSummatory = () => {
    percentCounter = 0;

    answerCollection.forEach(item => {
      percentCounter = Math.round(percentCounter + item.value * 100);
    });

    return percentCounter;
  };

  const getCurrentInput = id => {
    return answerCollection.find(input => input.componentId == id);
  };

  const isPristine = id => {
    const currentInput = getCurrentInput(id);
    return currentInput.value === 0;
  };

  const renderCompositeList = () => {
    return inputs.map((input, index) => {
      const inputId = input.id;
      const currentInput = getCurrentInput(inputId);
      if (!currentInput) {
        answerCollection.push({
          componentId: inputId,
          value: 0.0
        });
      }
      return (
        <CompositeInputItem key={`composite_item_${index}`}>
          <InputItem hint={hint} pristine={isPristine(inputId).toString()}>
            <input
              type="number"
              max={total}
              min={0}
              id={inputId}
              value={
                getCurrentInput(inputId).value
                  ? Math.round(getCurrentInput(inputId).value * 100)
                  : ""
              }
              placeholder="0"
              onChange={e => setValue(e, inputId)}
              onBlur={e => setValue(e, inputId)}
            />
          </InputItem>
          <Label>{input.title}</Label>
        </CompositeInputItem>
      );
    });
  };

  return (
    <CompositeInputList>
      {renderCompositeList()}
      <CompositeInputTotal valid={percentCounter == 100}>
        {translate("TOTAL")}: {percentCounter}%
      </CompositeInputTotal>
    </CompositeInputList>
  );
}

CompositeInput.propTypes = {
  inputs: array.isRequired,
  total: number.isRequired,
  dataTest: string,
  hint: string,
  changeComposite: func.isRequired
};

export default CompositeInput;

import React, { Fragment } from "react";
import { func, array } from "prop-types";
import { LinedButtons, Subtitle } from "./styles";

import RadioButton from "../../common/RadioButton";
let choiceListAnswerCollection = [];

export const isCheckedAnswer = (questionId, value) => {
  const item = choiceListAnswerCollection.find(
    item => item.questionId == questionId
  );
  return (item && item.selectedOptionId === value) || false;
};

export const getCurrentQuestion = questionId => {
  return choiceListAnswerCollection.find(
    question => question.questionId == questionId
  );
};

export const onChangeChoiceList = (e, id, optionId, changeChoiceList) => {
  const question = getCurrentQuestion(id);
  question.selectedOptionId = optionId;

  const hasEmptyAnswer = choiceListAnswerCollection.filter(
    item => item.selectedOptionId === null
  );

  changeChoiceList(hasEmptyAnswer, choiceListAnswerCollection);
};

function SingleChoiceListInput({ inputs, changeChoiceList }) {
  return inputs.map((stepQuestion, index) => {
    const question = stepQuestion.question;
    const questionId = question.id;

    const currentQuestion = getCurrentQuestion(questionId);

    if (!currentQuestion) {
      choiceListAnswerCollection.push({
        selectedOptionId: null,
        questionId,
        className: "SingleChoiceAnswer"
      });
    }

    return (
      <Fragment key={index}>
        <Subtitle>{question.title}</Subtitle>
        <LinedButtons>
          {question.options.map((option, index) => {
            const id = question.id;

            return (
              <RadioButton
                key={`choice_${id}_${index}`}
                label={option.value}
                onChange={e =>
                  onChangeChoiceList(e, id, option.id, changeChoiceList)
                }
                checked={isCheckedAnswer(id, option.id)}
              />
            );
          })}
        </LinedButtons>
      </Fragment>
    );
  });
}

SingleChoiceListInput.propTypes = {
  inputs: array.isRequired,
  changeChoiceList: func.isRequired
};

export default SingleChoiceListInput;

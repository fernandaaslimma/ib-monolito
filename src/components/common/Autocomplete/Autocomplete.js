import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { array, func, string, bool, oneOfType, object } from "prop-types";
import {
  SuggestionsList,
  Wrapper,
  Empty,
  Input,
  Element,
  Label,
  IconeFeedback
} from "./styles";
import { ClickOutsideHandler } from "react-bocombbm-components";
import Icon from "../../common/Icon";

const Autocomplete = ({
  list,
  change,
  value,
  disabled,
  styles,
  label,
  dataTest,
  noMatchMessage,
  fieldToFilter,
  backgroundColor,
  labelColor
}) => {
  const inputRef = useRef(null);
  const suggestionsListRef = useRef(null);

  const [autocompleteState, updateState] = useState({
    showSuggestions: false,
    userInput: value,
    suggestions: [],
    error: false
  });

  const { showSuggestions, userInput, suggestions, error } = autocompleteState;

  useEffect(() => {
    updateState({ userInput: value, error });
  }, [value, error]);

  const update = newState => {
    updateState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  const findItemInList = currentUserInput =>
    list.find(
      suggestion =>
        suggestion[fieldToFilter].toLowerCase() ===
        currentUserInput.toLowerCase()
    );

  const filterItensInList = currentUserInput =>
    list.filter(suggestion =>
      suggestion[fieldToFilter]
        .toLowerCase()
        .includes(currentUserInput.toLowerCase())
    );

  const checkIfHasToTriggerChange = () => {
    const currentUserInput = userInput;
    if (currentUserInput.toLowerCase() != value.toLowerCase()) {
      const selected = findItemInList(currentUserInput);
      if (selected) {
        update({ showSuggestions: false, error: false, currentUserInput });
        change(selected);
      } else {
        update({
          error: true,
          showSuggestions: false,
          userInput: currentUserInput
        });
        change({ value: currentUserInput });
      }
    }
  };

  const onMouseDown = e => {
    const currentUserInput = e.currentTarget.innerText;
    const selected = findItemInList(currentUserInput);
    update({
      showSuggestions: false,
      userInput: currentUserInput,
      error: false
    });
    change(selected);
  };

  const onChangeHandler = e => {
    const currentUserInput = e.currentTarget.value;
    const suggestions = filterItensInList(currentUserInput);
    update({
      userInput: currentUserInput,
      showSuggestions: true,
      suggestions
    });
  };

  const showSuggestionsHandler = hasToFocus => {
    update({
      showSuggestions: hasToFocus,
      suggestions: list
    });
  };

  let suggestionsListComponent;

  if (showSuggestions) {
    const bodyReference = document.body.getBoundingClientRect();
    const position = inputRef.current.getBoundingClientRect();

    suggestionsListComponent = suggestions.length ? (
      <ClickOutsideHandler onClickOutside={() => showSuggestionsHandler(false)}>
        <SuggestionsList
          position={position}
          body={bodyReference}
          innerRef={suggestionsListRef}
        >
          {suggestions.map((suggestion, index) => (
            <Element key={index} onMouseDown={onMouseDown}>
              {suggestion[fieldToFilter]}
            </Element>
          ))}
        </SuggestionsList>
      </ClickOutsideHandler>
    ) : (
      <Empty position={position} body={bodyReference}>
        {noMatchMessage}
      </Empty>
    );
  }

  return (
    <Wrapper
      styles={styles}
      data-test={dataTest ? dataTest : Autocomplete.displayName}
    >
      <Input
        onChange={onChangeHandler}
        data-test={dataTest + "-input"}
        onFocus={() => showSuggestionsHandler(true)}
        onBlur={checkIfHasToTriggerChange}
        value={userInput}
        innerRef={inputRef}
        disabled={disabled}
        isEmpty={!userInput}
        error={error}
        type="text"
        backgroundColor={backgroundColor}
        labelColor={labelColor}
      />
      {label && <Label>{label}</Label>}
      {!showSuggestions && (
        <IconeFeedback error={error}>
          {error && <Icon type="Attention" width="24" height="24" />}
          {!error && value.length > 0 && (
            <Icon type="Check" width="13" height="13" />
          )}
        </IconeFeedback>
      )}
      {ReactDOM.createPortal(suggestionsListComponent, document.body)}
    </Wrapper>
  );
};

Autocomplete.displayName = "Autocomplete";

Autocomplete.defaultProps = {
  noMatchMessage: "No match results for inputed value",
  value: "",
  fieldToFilter: "value"
};

Autocomplete.propTypes = {
  list: array.isRequired,
  change: func.isRequired,
  valid: func,
  value: string,
  disabled: bool,
  styles: string,
  label: oneOfType([string, object]),
  dataTest: string,
  noMatchMessage: string,
  fieldToFilter: string
};

export default Autocomplete;

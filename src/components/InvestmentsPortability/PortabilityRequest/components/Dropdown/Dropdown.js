import React, { useEffect, useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  ArrowIconContainer,
  FlagIconContainer,
  InfoContainer,
  OptionsContainer,
  Options,
  Title,
  WrapperIconRight
} from "./styles";
import Icon from "../../../../common/Icon";
import { formatCNPJ } from "../../../../../utils/formatNumber";

const Dropdown = ({
  iconLeft = false,
  options = [],
  label = "",
  iconLabel = "",
  onChange = () => { },
  optionsKey,
  dataTest,
  disabled,
  simpleArray
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(label);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (options === null || options.length != 1) return;

    simpleArray
      ? setValue(options[0])
      : setValue(optionsKey && options[0][optionsKey]);
    setIcon(options[0].icon);
    setIsSelected(false);
    onChange(options[0]);
  }, [options]);

  useEffect(() => {
    if (isSelected) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSelected]);

  const toggleExpand = () => {
    setIsSelected(!isSelected);
  };

  const handleClickOutside = (event) => {
    const clickedElement = event.target;
    if (
      !clickedElement.closest(".dropdown-button") &&
      !clickedElement.closest(".options-container")
    ) {
      setIsSelected(false);
    }
  };

  return (
    <DropdownContainer>
      <DropdownButton
        className="dropdown-button"
        data-test={dataTest}
        onBlur={() => setIsSelected(false)}
        onClick={toggleExpand}
        isSelected={isSelected}
        disabled={disabled}
      >
        <InfoContainer>
          {iconLeft && (
            <FlagIconContainer>
              <Icon type={icon || iconLabel} height={28} width={28} />
            </FlagIconContainer>
          )}
          <Title isSelected={isSelected}>{value}</Title>
        </InfoContainer>
        <ArrowIconContainer isSelected={isSelected}>
          <Icon type="Arrow" iconColor={disabled ? "#D5E3F8" : "#3976CF"} />
        </ArrowIconContainer>
      </DropdownButton>
      <OptionsContainer
        className="options-container"
        isSelected={isSelected}
        onBlur={() => setIsSelected(false)}
      >
        {options &&
          options.map((item, index) => (
            <Options
              key={index}
              onClick={() => {
                simpleArray
                  ? setValue(item)
                  : setValue(optionsKey &&
                    (item[optionsKey[0]] ? formatCNPJ(item[optionsKey[0]]) : "") +
                    " " +
                    (item[optionsKey[1]] ? item[optionsKey[1]] : ""));
                setIcon(item.icon);
                setIsSelected(false);
                onChange(item);
              }}
            >
              <Title>
                {simpleArray ? item : optionsKey &&
                  (item[optionsKey[0]] ? formatCNPJ(item[optionsKey[0]]) : "") +
                  " " +
                  (item[optionsKey[1]] ? item[optionsKey[1]] : "")}
              </Title>
              <WrapperIconRight>
                <FlagIconContainer marginRight={"30px"}>
                  <Icon type={item.code} height={28} width={28} />
                </FlagIconContainer>
              </WrapperIconRight>
            </Options>
          ))}
      </OptionsContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
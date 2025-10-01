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

const Dropdown = ({
  iconLeft = false,
  options = [],
  label = "",
  iconLabel = "",
  onChange = () => {},
  optionsKey,
  dataTest,
  disabled,
  simpleArray
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(label);
  const [icon, setIcon] = useState(null);

  const toggleExpand = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    if (options === null || options.length != 1) return;

    simpleArray
      ? setValue(options[0])
      : setValue(optionsKey && options[0][optionsKey]);
    setIcon(options[0].icon);
    setIsSelected(false);
    onChange(options[0]);
  }, [options]);

  return (
    <DropdownContainer>
      <DropdownButton
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
                  : setValue(optionsKey && item[optionsKey]);
                setIcon(item.icon);
                setIsSelected(false);
                onChange(item);
              }}
            >
              <Title>
                {simpleArray ? item : optionsKey && item[optionsKey]}
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

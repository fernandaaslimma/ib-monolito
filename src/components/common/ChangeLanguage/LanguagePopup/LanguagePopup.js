import React from "react";
import { string, arrayOf, shape, func } from "prop-types";
import {
  Wrapper,
  ListItem,
  Text,
  FlagIcon,
  CheckIcon,
  AcronymText
} from "./styles";
import { EN_US } from "../../../../utils/constants";

function LanguagePopup({ languages, currentLanguage }) {
  return (
    <Wrapper data-test="LanguagePopup">
      {languages.map(({ icon, name, code, onClick, acronym }) => {
        const isActive = currentLanguage === code;
        return (
          <ListItem
            data-test={`LanguagePopup_${code}`}
            key={code}
            active={isActive}
            onClick={onClick}
          >
            <FlagIcon type={icon} />
            <Text>{name}</Text>
            <AcronymText>{acronym}</AcronymText>
            <CheckIcon type="Check" />
          </ListItem>
        );
      })}
    </Wrapper>
  );
}

LanguagePopup.defaultProps = {
  languages: [],
  currentLanguage: EN_US
};

LanguagePopup.propTypes = {
  languages: arrayOf(
    shape({
      code: string,
      icon: string,
      name: string,
      onClick: func
    })
  ),
  currentLanguage: string
};

export default LanguagePopup;

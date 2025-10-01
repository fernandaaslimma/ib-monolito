import React from "react";
import avatarLetter from "../../../utils/avatarLetter";
import { Container, Title } from "./styles";

const AvatarLetterIcon = ({ fullName }) => {
  return (
    <Container>{fullName && <Title>{avatarLetter(fullName)}</Title>}</Container>
  );
};

export default AvatarLetterIcon;

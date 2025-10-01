import React from "react";
import { Button } from "./styles";

const ButtonResponsive = ({
  dataTest,
  label,
  onClick,
  percentWidth,
  onHover,
  margintop,
  borderRadius,
  background,
  color,
  disabled,
  loading
}) => {
  return (
    <Button
      data-test={dataTest}
      onClick={onClick}
      percentWidth={percentWidth}
      onHover={onHover}
      margintop={margintop}
      borderRadius={borderRadius}
      background={background}
      color={color}
      disabled={disabled}
      loading={loading}
    >
      {label}
    </Button>
  );
};

export default ButtonResponsive;

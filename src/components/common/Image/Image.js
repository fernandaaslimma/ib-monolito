import React, { useState } from "react";

import { WapperImg } from "./styles";

export const Image = ({ src, srcOnError, ...rest }) => {
  const [srcImg, setSrcImg] = useState(null);

  const onError = () => {
    setSrcImg(srcOnError);
  };

  if (!srcOnError) {
    return <WapperImg src={src} {...rest} />;
  }
  if (srcImg) {
    return <WapperImg src={srcImg} {...rest} />;
  }
  return <WapperImg src={src} onError={onError} {...rest} />;
};

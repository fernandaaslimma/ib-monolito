import React from "react";
import {
  TransferDetailsTitle,
  TransferDetailsItem,
  TransferDetailsList,
  TransferDetailsWrapper
} from "./styles";

function TransferDetails({ dataTest, title, list }) {
  return (
    <TransferDetailsWrapper>
      <TransferDetailsTitle>{title}</TransferDetailsTitle>
      <TransferDetailsList>
        {list.map((info, index) => (
          <TransferDetailsItem data-test={`${dataTest}_${index}`} key={index}>
            {info}
          </TransferDetailsItem>
        ))}
      </TransferDetailsList>
    </TransferDetailsWrapper>
  );
}

export default TransferDetails;

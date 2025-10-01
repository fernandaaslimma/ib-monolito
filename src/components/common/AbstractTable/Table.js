import React from "react";
import PropTypes from "prop-types";

import {
  TableWrapper,
  TrWrapper,
  TdWrapper,
  ThWrapper,
  TheadWrapper,
  TbodyWrapper
} from "./styles";

export const Table = ({ children, simpleList, marginTop }) => (
  <TableWrapper marginTop={marginTop} simpleList={simpleList}>
    {children}
  </TableWrapper>
);

Table.propTypes = {
  children: PropTypes.any,
  simpleList: PropTypes.bool,
  marginTop: PropTypes.string
};

Table.Td = TdWrapper;
Table.Th = ThWrapper;
Table.Tr = TrWrapper;
Table.Thead = TheadWrapper;
Table.Tbody = TbodyWrapper;

export default Table;

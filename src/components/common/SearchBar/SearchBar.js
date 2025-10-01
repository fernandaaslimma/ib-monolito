import React, { Component, Fragment } from "react";
import Input from "react-bocombbm-components/dist/Input";
import { gray80 } from "../../../styles/settings";
import { Array, string, number } from "prop-types";
import Icon from "../../common/Icon";
import { translate } from "../../../utils/i18n";

import {
  WrapperInput,
  IconSearch,
  IconClose,
  WarningMessage,
  Bold
} from "./styles";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchItens: null,
      searchValue: null,
      noMatchResult: false
    };
  }

  findArguments(arg) {
    const { keysNameToMach, list } = this.props;
    const matchItens = [];
    let wasMatch = false;

    arg === ""
      ? this.setState({
          searchValue: null
        })
      : (list.map((item, index) => {
          keysNameToMach.map(key => {
            this.removeAccents(item[key]).includes(this.removeAccents(arg))
              ? (!matchItens.includes(index) && matchItens.push(index),
                this.setState({ noMatchResult: false }),
                (wasMatch = true))
              : !wasMatch && this.setState({ noMatchResult: true });
          });
        }),
        this.setState({
          searchValue: arg,
          matchItens: matchItens
        }));
  }

  removeAccents(arg) {
    let freeAccents = arg;
    freeAccents = freeAccents.toLowerCase();
    freeAccents = freeAccents.replace(new RegExp("[Ç]", "gi"), "c");
    freeAccents = freeAccents.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
    freeAccents = freeAccents.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
    freeAccents = freeAccents.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
    freeAccents = freeAccents.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
    freeAccents = freeAccents.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
    return freeAccents;
  }

  clearSearch() {
    this.setState({
      matchItens: null,
      searchValue: "",
      noMatchResult: false
    });
  }

  render() {
    const { dataTest, children, typeIput, maxLength, placeholder } = this.props;
    const { matchItens, noMatchResult, searchValue } = this.state;

    return (
      <Fragment>
        <WrapperInput>
          <Input
            dataTest={"searchBar" + dataTest}
            onChange={e => this.findArguments(e.target.value)}
            maxLength={maxLength}
            type={typeIput}
            name={dataTest}
            value={searchValue}
            placeholder={placeholder}
            backgroundColor={gray80}
            tinyLabels
          />

          <IconSearch>
            <Icon type="Search" width="14" height="14" />
          </IconSearch>
          <IconClose
            data-test="searchBarCleaner"
            onClick={() => this.clearSearch()}
          >
            <Icon type="CloseFilled" width="14" height="14" color="red" />
          </IconClose>
        </WrapperInput>

        {noMatchResult && searchValue && (
          <WarningMessage data-test="searchBarWarningMessage">
            {translate("TED_SEARCH_NOT_FOUND")} <Bold>{searchValue}</Bold>
          </WarningMessage>
        )}

        <div>{searchValue ? matchItens.map(e => children[e]) : children}</div>
      </Fragment>
    );
  }
}

SearchBar.defaultProps = {
  list: [],
  keysNameToMach: [],
  type: "text",
  maxLength: 40,
  placeholder: ""
};

SearchBar.propTypes = {
  list: Array,
  keysNameToMach: Array,
  type: string,
  maxLength: number,
  placeholder: string
};

export default SearchBar;

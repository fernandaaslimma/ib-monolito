import React, { Component } from "react";
import { bool, arrayOf, shape, string, func, array } from "prop-types";

import {
  ListWrapper,
  ListItem,
  ListShowHide,
  Name,
  ListIcon,
  InnerList,
  InnerListItem,
  IconButton,
  InnerListItemName
} from "./styles";

let currentShownState = null;

class ListFiles extends Component {
  constructor(props) {
    super(props);

    this.handleShowHide = this.handleShowHide.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isShown: currentShownState || []
    };
  }

  handleClick(id) {
    this.props.clickAction(id);
  }

  handleShowHide(index) {
    let newState = Object.assign({}, this.state);
    if (newState.isShown[index] === "undefined")
      newState.isShown[index] = false;

    newState.isShown[index] = !this.state.isShown[index];
    this.setState(newState);
  }

  buildFiles(files) {
    return files.map((file, index) => (
      <InnerListItem key={index}>
        <IconButton
          data-test={`ListFileItemButton_${index}`}
          type="Download"
          width="20"
          height="20"
          onClick={() => {
            this.handleClick(file.id);
          }}
        />
        <InnerListItemName>{file.name}</InnerListItemName>
      </InnerListItem>
    ));
  }

  buildFolders(folders) {
    const { isShown } = this.state;
    const foldersNotEmpty = folders.filter(f => f.files.length > 0);
    return foldersNotEmpty.map((folder, index) => (
      <ListItem key={index} data-test={`ListFileItem_${index}`}>
        <ListShowHide onClick={() => this.handleShowHide(index)}>
          <ListIcon
            type="Arrow"
            width="10"
            height="10"
            isShown={isShown[index]}
          />
          <Name>{folder.name}</Name>
        </ListShowHide>

        <InnerList isShown={isShown[index]} size={folder.files.length}>
          {this.buildFiles(folder.files)}
        </InnerList>
      </ListItem>
    ));
  }

  render() {
    const { folders } = this.props;
    return <ListWrapper>{this.buildFolders(folders)}</ListWrapper>;
  }
}

ListFiles.displayName = "ListFiles";
ListFiles.defaultProps = {
  state: {
    isShown: []
  },
  folders: []
};

ListFiles.propTypes = {
  folders: arrayOf(
    shape({
      name: string,
      typeId: string,
      files: array
    })
  ),
  shimmerloading: bool,
  clickAction: func
};

export default ListFiles;

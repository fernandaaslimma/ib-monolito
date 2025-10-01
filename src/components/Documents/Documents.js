import React, { Component, Fragment } from "react";
import { arrayOf, shape, string, func, bool, array } from "prop-types";

import { Title } from "./styles";
import { Container } from "../../styles/grid";

import { translate } from "../../utils/i18n";
import { black30 } from "../../styles/settings";
import Icon from "../common/Icon";
import ListFiles from "../common/ListFiles";
import DefaultContent from "../common/DefaultContent";
import DefaultShimmerLoading from "../common/DefaultShimmerLoading";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Documents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false
    };

    this.download = this.download.bind(this);
    this.shouldRerender = true;
  }

  shouldComponentUpdate() {
    return this.shouldRerender;
  }

  componentDidUpdate(prevProps) {
    const { filesByFolder, loading } = this.props;
    const { isEmpty } = this.state;

    if (
      prevProps.filesByFolder.length &&
      prevProps.filesByFolder === filesByFolder &&
      !loading &&
      !isEmpty
    ) {
      this.shouldRerender = false;
    }
  }

  checkIfAllFoldersAreEmpty() {
    const folders = this.props.filesByFolder;
    let emptyArray = [true];
    folders.forEach((folder, index) => {
      if (folder.files) {
        folder.files.length === 0
          ? (emptyArray[index] = true)
          : (emptyArray[index] = false);
      }
    });

    const hasNoFile = emptyArray.indexOf(false) === -1;
    this.setState({ isEmpty: hasNoFile });
  }

  download(id) {
    this.props.downloadDocument(id);
  }

  async componentDidMount() {
    await this.props.getFilesByFolder();
    this.checkIfAllFoldersAreEmpty();
  }

  render() {
    const { filesByFolder, loading, error } = this.props;
    const { isEmpty } = this.state;

    return (
      <ErrorBoundary errorStatus={error}>
        <Container data-test="DocumentsPage">
          {(loading || !filesByFolder.length) && !isEmpty && (
            <DefaultShimmerLoading repeat={3} innerRepeat={2} />
          )}
          {isEmpty && !loading && (
            <DefaultContent
              data-test="Empty_Position"
              Icon={() => <Icon type="Documents" color={black30} />}
              primaryText={translate("NO_DOCUMENTS")}
              secondaryTexts={[translate("NO_AVAILABLE_DOCUMENTS")]}
            />
          )}
          {!isEmpty && !loading && filesByFolder.length > 0 && (
            <Fragment>
              <Title>{translate("DOCUMENTS")}</Title>

              <ListFiles folders={filesByFolder} clickAction={this.download} />
            </Fragment>
          )}
        </Container>
      </ErrorBoundary>
    );
  }
}

Documents.defaultProps = {
  state: {
    isEmpty: false
  },
  filesByFolder: []
};

Documents.propTypes = {
  filesByFolder: arrayOf(
    shape({
      name: string,
      typeId: string,
      files: array
    })
  ),
  loading: bool.isRequired,
  getFilesByFolder: func.isRequired
};

export default Documents;

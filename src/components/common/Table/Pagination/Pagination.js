import React from "react";
import PropTypes from "prop-types";
import Paginator from "paginator";

import {
  Wrapper,
  Page,
  FirstPage,
  PreviousPage,
  NextPage,
  LastPage
} from "./styles";

import Icon from "../../Icon";

export const generatePageRange = pagination => {
  const pages = [];
  for (let i = pagination.first_page; i <= pagination.last_page; i++) {
    pages.push(i);
  }
  return pages;
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this._onChangePage = this._onChangePage.bind(this);
    this._setupPages = this._setupPages.bind(this);

    this.state = {
      pages: this._setupPages(props)
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      pages: this._setupPages(props)
    });
  }

  _onChangePage(nextPage, disabled = false) {
    const { onChangePage, activePage } = this.props;
    if (!disabled && nextPage !== activePage) {
      return onChangePage(nextPage);
    }
  }

  _setupPages(props) {
    const { activePage, pageTotal, pageSize, pageRange } = props;

    const paginator = new Paginator(pageSize, pageRange);
    this.pagination = paginator.build(pageTotal, activePage);

    return generatePageRange(this.pagination);
  }

  render() {
    const { activePage } = this.props;
    const { pages } = this.state;

    if (this.pagination.has_next_page || this.pagination.has_previous_page) {
      return (
        <Wrapper>
          <FirstPage
            disabled={activePage === 1}
            onClick={() =>
              this._onChangePage(1, !this.pagination.has_previous_page)
            }
          >
            <Icon type="BoldDoubleArrow" />
          </FirstPage>
          <PreviousPage
            disabled={!this.pagination.has_previous_page}
            onClick={() =>
              this._onChangePage(
                activePage - 1,
                !this.pagination.has_previous_page
              )
            }
          >
            <Icon type="BoldArrow" />
          </PreviousPage>
          {pages.map(page => (
            <Page
              active={activePage === page}
              onClick={() => this._onChangePage(page)}
              key={page}
            >
              {page}
            </Page>
          ))}
          <NextPage
            disabled={!this.pagination.has_next_page}
            onClick={() =>
              this._onChangePage(activePage + 1, !this.pagination.has_next_page)
            }
          >
            <Icon type="BoldArrow" />
          </NextPage>
          <LastPage
            disabled={activePage === this.pagination.total_pages}
            onClick={() =>
              this._onChangePage(
                this.pagination.total_pages,
                !this.pagination.has_next_page
              )
            }
          >
            <Icon type="BoldDoubleArrow" />
          </LastPage>
        </Wrapper>
      );
    }
    return null;
  }
}

Pagination.defaultProps = {
  pageSize: 10,
  initialPage: 1,
  pageRange: 5
};

Pagination.propTypes = {
  pageTotal: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageRange: PropTypes.number
};

export default Pagination;

import React, { Fragment, Component } from "react";
import Icon from "../common/Icon/";
import Link from "../common/Link";
import getQueryParam from "../../utils/getQueryParam";
import { string } from "prop-types";
import { translate } from "../../utils/i18n";
import { isInternetExplorer } from "../../utils/getNavigator";
import { preflightForInternetExplorer } from "../../services/login";

import {
  Wrapper,
  Header,
  IconWrapper,
  Title,
  Email,
  BackButtonWrapper,
  Content,
  Subtitle,
  Container
} from "./styles";

class EmailSent extends Component {
  componentWillMount() {
    /*
    This request is required for Internet Explorer only
    It makes a preflight request without the headers.
    */
    if (isInternetExplorer()) {
      preflightForInternetExplorer();
    }
  }
  render() {
    const { cleanPasswordSuccess } = this.props;
    const email = getQueryParam(location, "email");
    return (
      <Fragment>
        <Container>
          <Wrapper data-test="SentMail">
            <Header>
              <IconWrapper>
                <Icon type="BrandLogo" />
              </IconWrapper>
            </Header>
            <Content>
              <Title>{translate("RECOVER_PASSWORD_SENT")}</Title>
              <Subtitle data-test="EmailSentFeedbackMsg">
                {`${translate("RECOVER_PASSWORD_SENT_TEXT_1")}`}{" "}
                <Email>{email}</Email>{" "}
                {translate("RECOVER_PASSWORD_SENT_TEXT_2")}
              </Subtitle>
              <IconWrapper spacing={40}>
                <Icon type="SentMail" data-test="ImgEmailSent" />
              </IconWrapper>
              <BackButtonWrapper>
                <Link
                  to={"/"}
                  anchor
                  noSpan
                  opacity={1}
                  onClick={cleanPasswordSuccess}
                >
                  {translate("BACK_TO_LOGIN")}
                </Link>
              </BackButtonWrapper>
            </Content>
          </Wrapper>
        </Container>
      </Fragment>
    );
  }
}

EmailSent.defaultProps = {
  email: ""
};

EmailSent.propTypes = {
  email: string
};

export default EmailSent;

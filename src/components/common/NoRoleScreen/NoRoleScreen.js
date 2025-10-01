import React from 'react';
import { Image, Message, SubMessage, Wrapper, WrapperContent } from './styles';
import ImageError from "../../../assets/imgs/error.png";
import { translate } from '../../../utils/i18n';

const NoRoleScreen = () => {
    return (
        <Wrapper data-test={"wrapperTest"}>
            <WrapperContent data-test={"wrapperContentTest"}>
                <Image data-test={"imageNoRoleTest"} src={ImageError}></Image>
                <Message data-test={"messageNoRoleTest"}>{translate("NO_ROLE_FIRST_MESSAGE")}</Message>
                <SubMessage data-test={"firstSubMessageNoRoleTest"}>{translate("NO_ROLE_SECOND_MESSAGE")}</SubMessage>
                <SubMessage data-test={"secondSubMessageNoRoleTest"}>{translate("NO_ROLE_THIRD_MESSAGE")}</SubMessage>
            </WrapperContent>
        </Wrapper>
    )
}

export default NoRoleScreen
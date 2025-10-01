import React from "react";
import { number } from "prop-types";
import { ListItem, InnerListItem, InnerShimmerList, Wrapper } from "./styles";
import { Container } from "../../../styles/grid";
import ShimmerLoading from "../../common/ShimmerLoading";
function DefaultShimmerLoading({
  repeat,
  innerRepeat,
  dataTest = "container"
}) {
  return (
    <Wrapper data-test={dataTest}>
      <Container>
        {[...Array(repeat)].map((item, index) => (
          <ListItem key={index}>
            <InnerShimmerList>
              {[...Array(innerRepeat)].map((item, index) => (
                <InnerListItem key={index}>
                  <ShimmerLoading />
                </InnerListItem>
              ))}
            </InnerShimmerList>
          </ListItem>
        ))}
      </Container>
    </Wrapper>
  );
}
DefaultShimmerLoading.propTypes = {
  repeat: number,
  innerRepeat: number
};

export default DefaultShimmerLoading;

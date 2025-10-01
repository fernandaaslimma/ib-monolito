import React, { Fragment } from "react";
import { node, string, func, number } from "prop-types";
import { TabsWrapper, Tab, Title, Line } from "./styles";
import { scrollToTop } from "../../../utils/dom";

function Tabs({
  children,
  selectedTab,
  setSelectedTab,
  backgroundColor,
  widthTabs
}) {
  const changeSelectedMenu = menuPosition => {
    setSelectedTab(menuPosition);
    scrollToTop();
  };

  let contentFromChildren = Array.isArray(children) ? children : [children];

  return (
    <Fragment>
      <TabsWrapper backgroundColor={backgroundColor} widthTabs={widthTabs}>
        {contentFromChildren.map((item, index) => {
          return item.props.hide ? null : (
            <Tab
              key={index}
              className="Tabs"
              data-test={`tab_${item.props.title}`}
            >
              <Title
                active={selectedTab === index}
                data-test={`title-${index}`}
                onClick={() => changeSelectedMenu(index)}
              >
                {item.props.title}
              </Title>
            </Tab>
          );
        })}
      </TabsWrapper>
      <Line />
      {contentFromChildren[selectedTab]}
    </Fragment>
  );
}

Tabs.defaultProps = {
  children: null,
  selectedTab: 0,
  setSelectedTab: null,
  backgroundColor: "#fff",
  widthTabs: null
};

Tabs.propTypes = {
  children: node,
  selectedTab: number,
  setSelectedTab: func,
  backgroundColor: string,
  widthTabs: number
};

export default Tabs;

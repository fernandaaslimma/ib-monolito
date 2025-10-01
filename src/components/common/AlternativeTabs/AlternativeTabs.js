import React, { useEffect, useState } from "react";
import { Container, ContentContainer, TabsContainer } from "./style";
import IndividualTab from "./IndividualTab";

const AlternativeTabs = ({
  tabs,
  setSelectedTab = () => {},
  dataTest = "alternativeTabsContainer"
}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { Content } = tabs[currentTab];

  useEffect(() => {
    setSelectedTab(currentTab);
  }, [currentTab]);

  return (
    <Container data-test={dataTest}>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <IndividualTab
            dataTest={"individualTab" + index}
            key={index}
            tab={tab}
            setCurrentTab={() => setCurrentTab(index)}
            selected={currentTab === index}
          />
        ))}
      </TabsContainer>
      <ContentContainer data-test="contentContainer">
        {Content && <Content />}
      </ContentContainer>
    </Container>
  );
};

export default AlternativeTabs;

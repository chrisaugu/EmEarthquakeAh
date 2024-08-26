import React from "react";
import { Page, PageContent, PageHeader,
  Paragraph,
  Heading,
} from 'grommet';
import ContentContainer from "../components/ContentContainer";

export default function About() {
  return (
    <>
      <Page pad="medium">
        <PageContent>
          <PageHeader
            title="About"
          />

          <ContentContainer>
            <Heading>What is EmEarthquakeAh?</Heading>
            <Paragraph>EmEarthquakeAh is a play on words for "Em Earthquake Ah?", a phrasal question used when someone felt a shake.</Paragraph>
          </ContentContainer>
        </PageContent>

      </Page>
    </>
  );
}

import React from "react";
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader,
  Paragraph,
  Heading,
} from 'grommet';
import ContentContainer from "../components/ContentContainer";

export default function About() {
  return (
    <>
      <Page pad="small">
        <PageContent>
          <PageHeader
            title="About"
            parent={<Link to="/" label="Home">Back</Link>}
            subtitle={`This is the about page`}
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

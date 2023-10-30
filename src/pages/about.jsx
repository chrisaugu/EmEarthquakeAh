import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import { Page, PageContent, PageHeader,
  Text,
  Paragraph,
  Heading,
  Button,
  Box,
  Grid,
  Anchor,
} from 'grommet';
import TheFooter from "../components/TheFooter";
import ContentContainer from "../components/ContentContainer";

export default function About() {
  return (
    <>
      <Page pad="medium">
        <PageContent>
          <PageHeader
            title="About"
            subtitle="A subtitle for the page."
          />

          <ContentContainer>
          <Heading>What is EmEarthquakeAh?</Heading>
          <Paragraph>EmEarthquakeAh is a play on words for "Em Earthquake Ah?", a rather phrasal question used when someone felt a shake.</Paragraph>
          </ContentContainer>
        </PageContent>

      </Page>
    </>
  );
}

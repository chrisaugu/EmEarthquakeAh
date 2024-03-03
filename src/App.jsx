import {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import { grommet, Grommet, Page, PageContent, PageHeader, Header, Main,
  Text,
  Paragraph,
  Heading,
  Button,
  Box,
  Grid,
  Anchor,
  Sidebar,
  Nav,
  Avatar,
} from 'grommet';
import * as Icons from "grommet-icons";
import { hpe } from 'grommet-theme-hpe';

import './App.css';
import logo from "./assets/vercel.svg";
import AppProvider, { AppContext, useTheme } from './libs/AppContext';
import CardTemplate from "./components/CardTemplate";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";
import Home from "./pages/home";
import About from "./pages/about";

import { theme, hpeLeaflet, generic } from "./themes";

function MyApp() {
  const {theme} = useTheme();

  return (
    <AppProvider>
      <Grommet hpe={hpe} theme={generic} background="background-back" full themeMode={theme}>
        <TheHeader/>
        {/*<Header background="brand">
          <Button icon={<Icons.Home />} hoverIndicator />
          <Menu label="account" items={[{ label: 'logout' }]} />
        </Header>*/}
        {/*<Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
        <Grid
          rows={['xxsmall', 'xsmall']}
          columns={['xsmall', 'small']}
          gap="small"
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box gridArea="header" background="brand" />
          <Box gridArea="nav" background="light-5" />
          <Box gridArea="main" background="light-2" />
          <Sidebar background="brand" round="small"
            header={
              <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            }
            footer={
              <Button icon={<Icons.Help />} hoverIndicator />
            }
          >
            <Nav gap="small">
              <Button icon={<Icons.Projects />} hoverIndicator />
              <Button icon={<Icons.Clock />} hoverIndicator />
              <Link to="about">About</Link>
            </Nav>
          </Sidebar>*/}

          {/*<Main>*/}
            <Routes>
              <Route exact path="/" element={<Home/>} />
              {/*<Route exact path="/">
                {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
              </Route>*/}
              <Route path="/about" element={<About/>} />
              {/*<Route element={NotFound} />*/}
              {/*<Route path="*" element={NotFound}/>*/}
              {/*
              <Route element={<ProtectedRoutes/>}>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/Posts/:PostID' element={<ViewSharedPost/>}/>
              <Route path='/message/:userId?' element={<Message/>}/>
              <Route path='/notifications' element={<Notifications/>}/>
              <Route path='/verifyaccount' element={<Verify/>}/>*/}
              
            </Routes>
          {/*</Main>*/}

          <TheFooter/>

      </Grommet>
  </AppProvider>
  );
}

export default MyApp;
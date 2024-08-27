import {useState} from 'react';
import {Link} from "react-router-dom";
import {Header, Nav, Anchor, Text, Button, Box, Clock, ResponsiveContext } from "grommet";
import * as Icons from "grommet-icons";
import { Sun, Moon } from "grommet-icons";

import styles from "../styles/Home.module.css";
import { useTheme } from '../libs/AppContext';

// import Logo from "../assets/vercel.svg"

const AppBar = ({props, children}) => (
  <>
    <Header
      background="background-front"
      border={{ color: 'border-weak', side: 'bottom' }}
      pad={{ horizontal: 'large', vertical: 'small' }}
      sticky="scrollup"
      elevation="small"
      {...props}
    >
      {children}
    </Header>
    {/* <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation='medium'
      {...props}
    /> */}
  </>
);

export default function TheHeader() {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <>
      <AppBar>
        {/* <Text size="large">Em Earthquake Ah?</Text> */}
        <Nav flex={true} direction="row" xjustify="center" gap="xxsmall" xbackground="brand" xpad="medium">
          <Anchor icon={<Icons.Home />} hoverIndicator href="/" />
          {/* <Anchor icon={<Icons.ChatOption />} hoverIndicator href="/about" /> */}
          {/*<Clock type="digital" />*/}

          {/*<Button as={Link} label="Home" to="/" size="small" />*/}
          {/*<Button as={Link} label="Devices" to="/devices" size="small" />*/}
          {/*<Button as={Link} label="Sites" to="/sites" size="small" />*/}
          {/*<Button label="Settings" to="/sites" size="small" />*/}
        </Nav>
        
        <Button
          a11yTitle={theme ? "Switch to Light Mode" : "Switch to Dark Mode"}
          icon={theme == "dark" ? <Moon /> : <Sun />}
          onClick={toggleTheme}
          tip={{
            content: (
              <Box
                pad="small"
                round="small"
                background={theme ? "dark-1" : "light-3"}
              >
                {theme ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Box>
            ),
            plain: true,
          }}
        />
      </AppBar>

      
  {/* <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{ top: "large", horizontal: "xlarge" }}
      >
        <Anchor
          href="/"
          icon={<Moon />}
          color="black"
          label={
            size !== "xsmall" &&
            size !== "small" && <Text size="large">App Teaser</Text>
          }
        />
        {/* <SocialMedia />
      </Box>
    )}
  </ResponsiveContext.Consumer> */}
    </>
  )
}
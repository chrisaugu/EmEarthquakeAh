import {useState} from 'react';
import {Link} from "react-router-dom";
import {Header, Nav, Anchor, Text, Button, Box, Clock} from "grommet";
import * as Icons from "grommet-icons";
import { Sun, Moon } from "grommet-icons";

import styles from "../styles/Home.module.css";

const AppBar = (props) => (
  <>
    <Header
      background="background-front"
      border={{ color: 'border-weak', side: 'bottom' }}
      pad={{ horizontal: 'large', vertical: 'small' }}
      sticky=""
      elevation="medium"
      {...props}
    />
    {/*<Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation='medium'
      {...props}
    />*/}
  </>
);

export default function TheHeader({theme}) {
  const [dark, setDark] = useState(theme);
  
  return (
    <>
      <AppBar>
        {/*<Text size="large">My App</Text>*/}

        <Nav flex={true} direction="row" xjustify="center" gap="xxsmall" xbackground="brand" xpad="medium">
          <Anchor icon={<Icons.Home />} hoverIndicator href="/" />
          {/*<Anchor icon={<Icons.ChatOption />} hoverIndicator href="/about" />*/}
          {/*<Clock type="digital" />*/}

          {/*<Button as={Link} label="Home" to="/" size="small" />*/}
          {/*<Button as={Link} label="Devices" to="/devices" size="small" />*/}
          {/*<Button as={Link} label="Sites" to="/sites" size="small" />*/}
          {/*<Button label="Settings" to="/sites" size="small" />*/}
        </Nav>
        
        <Button
          a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          icon={dark ? <Moon /> : <Sun />}
          onClick={() => setDark(!dark)}
          tip={{
            content: (
              <Box
                pad="small"
                round="small"
                background={dark ? "dark-1" : "light-3"}
              >
                {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Box>
            ),
            plain: true,
          }}
        />
      </AppBar>
    </>
  )
}
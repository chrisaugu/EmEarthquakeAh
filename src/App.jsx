import {useState} from 'react';
import {Redirect, Route, Switch} from "react-router";
// import styled, { injectGlobal } from 'styled-components'
import { grommet, Grommet, Page, PageContent, PageHeader, Header, 
  Text,
  Button,
  Box,
  Grid
} from 'grommet';
import { Sun, Moon } from "grommet-icons";
import { deepMerge } from "grommet/utils";

import './App.css';
import logo from "./assets/vercel.svg";

import CardTemplate from "./components/CardTemplate";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  }
});

const AppBar = (props) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

// import { Footer } from "components/Footer";
// import { Nav } from "./components/Nav";

function MyApp() {
  const [dark, setDark] = useState(false);
  
  return (
    <Grommet theme={theme} background="background-back" full themeMode={dark ? "dark" : "light"}>
      <Page>
        {/*<GlobalHeader />*/}
        {/*<Routes>
          {router.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>*/}
        <AppBar>
          <Text size="large">My App</Text>

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

        <PageContent>
          <PageHeader title="Welcome to Grommet!" />
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"Card 1"}/>
            <CardTemplate title={"Card 2"}/>
            <CardTemplate title={"Card 3"}/>
            <CardTemplate title={"Card 4"}/>
          </Grid>
        </PageContent>

        </Page>
    </Grommet>
  );
}

export default MyApp;

/*
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/login" component={Login}/>
  <Route path="*" component={NotFound}/>
  <Redirect from="/old-match" to="/will-match" />
  <Route path="/will-match" component={WillMatch} />
  <Route component={NoMatch} />

  <Route exact path="/" component={Home} />
  <Route path="about" component={About} />
  <Route path="blog" component={Blog} />
  <Route component={NotFound} />
</Switch>
*/
import {useState, useEffect} from "react";
import {
  Box,
  Page,
  PageContent,
  Heading,
  WorldMap,
  Data,
  DataTable
} from "grommet";
import moment from 'moment';
import { useDocumentTitle } from "@uidotdev/usehooks";
import { Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';


import Api, {API_URL} from "../libs/api";
import {csv2json, csvParser, csvToJson, csvToJsonParser, CSVToArray} from "../libs/utils";
// import * as csvjson from "../libs/csvjson";

export default function Home() {
  const [result, setResult] = useState([]);
  useDocumentTitle("Home \/ Em Earthquake Ah?");

  async function getUser() {
    const gravatarLink = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";
    try {
      const response = await Api.get('?format=geojson&latitude=-5.2266836&longitude=145.3972343&maxradiuskm=1000');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  // get the user's location
  // useEffect(() => {
  //   userLocation().then(location => {
  //     setGeolocation(location);
  //     setLocations(generateLocations(50, { center: location, radius: 6 }));
  //   });
  // }, []);
  

  useEffect(() => {
    Api.get(API_URL, {
      params: {
        'format': 'csv',
        'latitude': -5.2266836,
        'longitude': 145.3972343,
        'maxradiuskm': 1000
      }
    })
    .then(async (res) => {
      let data = await csvParser(res.data);
      setResult(data);
      console.log(data)
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Page pad="small">
        <PageContent flex>
          {/*<PageHeader 
            title="Welcome to Your App"
            subtitle="In this example, we showcase different levels of page headers 
            using the `level` prop. Page headers help provide hierarchy 
            and structure to your application's content."
          />

          <Heading>Something</Heading>
          <Paragraph>Something about something</Paragraph>*/}

          {/* <Box
            margin={{bottom: 'medium', top: 'medium'}}
            elevation='small'
            background="background-front"
            pad="medium"
            round="medium"
            basis="small"
          >
            <Heading level={2} margin="none">
              Map
            </Heading>

            {/* <WorldMap
              color="graph-0"
              // continents={[
              //   {
              //     name: 'Asia',
              //     color: 'graph-1',
              //     onClick: (name) => {},
              //   },
              // ]}
              // onSelectPlace={(lat, lon) => {
              //   alert(`You are here! ${[lat, lon]}`)
              // }}
              places={[
                {
                  name: 'Papua New Guinea',
                  location: [-5.8, 145.6],
                  color: 'red',
                  onClick: (name) => {
                    alert(name)
                    // alert(`You are here! ${[lat, lon]}`)
                  },
                },
              ]}
              selectColor="brand"
            />

            {/* <Map>
              <Marker position={{ lat: 40.532, lng: -105.18 }} />
            </Map>
            
          </Box> */}

          <Box 
            margin={{bottom: 'medium'}}
            background="background-front"
            pad="medium"
            round="medium"
            elevation='small'>
              <Heading level={2} margin={{bottom: 'medium', top: 'none'}}>
                Recent Earthquakes in PNG
              </Heading>
          
            <Data 
              data={result}
              views={[
                { name: 'newest', sort: { property: 'time', direction: 'desc' } },
                { name: 'oldest', sort: { property: 'time', direction: 'asc' } }
              ]}>
              
              {/*<Toolbar>
                <DataSummary />
                <DataSearch />
                <Box flex/>
                <TextInput icon={<Search />} />
                <Button label="Create" primary />
                <DataTableGroupBy options={['country']} drop />
                <DropButton kind="toolbar" icon={<Filter />} />
                <DataSort drop />
                <DataView />
              </Toolbar>*/}

              <DataTable
                columns={[
                  {
                    property: 'time',
                    header: 'Time',
                    primary: true,
                    render: ({time}) => (
                      <span>{ moment(time, "YYYYMMDD").fromNow() }</span>
                    ),
                  },
                  {
                    property: 'place',
                    header: 'Place',
                  },
                  // {
                  //   property: 'latitude',
                  //   header: 'Latitude',
                  // },
                  // {
                  //   property: 'longitude',
                  //   header: 'Longitude',
                  // },
                  // {
                  //   property: 'type',
                  //   header: 'Type',
                  // },
                  {
                    property: 'mag',
                    header: 'Magnitude',
                  },
                ]}
              />
            </Data>
          </Box>

          {/*<SubscribeCard />*/}

          {/*<Grid columns="medium" gap="medium">
            {pages.map(page => (
              <StyledLink to={page.href} key={page.title}>
                <Card fill>
                  <CardBody gap="small">
                    <Box gap="xsmall">
                      <Heading level={2} margin="none">
                        {page.title}
                      </Heading>
                      <Paragraph margin="none">{page.description}</Paragraph>
                    </Box>
                    <LinkNext color="brand" />
                  </CardBody>
                </Card>
              </StyledLink>
            ))}
          </Grid>*/}

          {/*<Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            {
              result.map((card, i) => (
                <CardTemplate title={`Card ${i}`}/>
              ))
            }
            <CardTemplate title={"Card 1"} />
            <CardTemplate title={"Card 2"} />
            <CardTemplate title={"Card 3"} />
            <CardTemplate title={"Card 4"} />
          </Grid>*/}

        </PageContent>

      </Page>
    </>
  );
}

import {
	Box,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Grid,
	Grommet,
	grommet,
	Header,
	Heading,
	Page,
	PageContent,
	PageHeader,
	Paragraph,
	Text,
	TextInput,
} from "grommet";
import { Phone } from "grommet-icons";

const SubscribeCard = () => {
  return (
    <Card background="background-front">
      <CardHeader pad="medium">
        <Heading level={2} margin="none">
          Receive alerts
        </Heading>
      </CardHeader>
      <CardBody pad="medium">
        <Paragraph>
          Want to receive alerts of Earthquakes?
        </Paragraph>

        <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
					<TextInput icon={<Phone />} placeholder="000-000-00" />

					<Button primary label="Subscribe"/>
        </Grid>

      </CardBody>
    </Card>
  );
};

export default SubscribeCard;
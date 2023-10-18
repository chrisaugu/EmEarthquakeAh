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
} from "grommet";

const CardTemplate = ({ title }) => {
  return (
    <Card>
      <CardHeader pad="medium">
        <Heading level={2} margin="none">
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad="medium">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor non nulla ac vehicula. Aliquam erat volutpat. Mauris auctor
          faucibus est at mattis. Aliquam a enim ac nisi aliquam consectetur et
          ac velit. Mauris ut imperdiet libero.
        </Paragraph>
      </CardBody>
      <CardFooter pad="medium" background="background-contrast">
        Footer
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
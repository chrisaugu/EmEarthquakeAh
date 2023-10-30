import React from 'react';
import { Box } from 'grommet';

const ContentContainer = ({ ...rest }) => {
  return (
    <Box background="background-front" pad="medium" round="medium" {...rest} />
  );
};
export default ContentContainer;
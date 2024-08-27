import React from 'react';
import { Box } from 'grommet';

const ContentContainer = ({ props, children }) => {
  return (
    <Box background="background-front" pad="medium" round="medium" {...props}>{children}</Box>
  );
};
export default ContentContainer;
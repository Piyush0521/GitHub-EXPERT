import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <Flex
        color="whiteAlpha.900"
        direction="column"
        alignItems="center"
        ml="10rem"
        mt="3rem"
        gap="1rem"
      >
        <Heading>oops...Page Not Found</Heading>
        <Text fontWeight="500" fontSize="1.2rem">
          The URL you are looking for is not a valid URL
        </Text>
      </Flex>
    </div>
  );
};

export default NotFound;

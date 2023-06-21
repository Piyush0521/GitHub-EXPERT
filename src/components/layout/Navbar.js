import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <Box bg={'blue.800'} w={'100%'} h="8vh" p={3}>
        <Flex marginRight="2vw">
          <HStack>
            <FaGithub color="white" size="25" />
            <Text as="b" fontSize="lg" color="whiteAlpha.900">
              Github EXPERT
            </Text>
          </HStack>
          <Spacer />
          <HStack spacing="10" color="whiteAlpha.900">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </HStack>
        </Flex>
      </Box>
      <Divider height="1px" background="white" colorScheme="whiteAlpha" />
    </div>
  );
};

export default Navbar;

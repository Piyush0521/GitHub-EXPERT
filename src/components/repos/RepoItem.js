import React from 'react';
import { Card, CardHeader, Text, HStack, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RepoItem = ({ repo }) => {
  return (
    <div>
      <Link to={repo.html_url}>
        <Card
          width={{ base: '30rem', md: '45rem' }}
          variant="outline"
          _hover={{
            bg: 'blue.50',
            borderLeftRadius: '0',
            borderStart: '5px solid #1A365D',
          }}
        >
          <CardHeader>
            <Flex>
              <Text fontWeight="bold" color="blue.700">
                {repo.name}
              </Text>
              <Spacer />
              <HStack fontSize="0.9rem">
                <Text>~ created on</Text>
                <Text fontWeight="semibold">
                  {repo.created_at.slice(0, 10)}
                </Text>
              </HStack>
            </Flex>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default RepoItem;

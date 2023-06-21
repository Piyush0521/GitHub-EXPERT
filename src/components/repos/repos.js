import { VStack, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div>
      <VStack>
        <Text fontWeight="bold" fontSize="1.1rem">
          Recent Repositories
        </Text>
        <SimpleGrid spacing={2} templateColumns="repeat(1,1fr)">
          {repos.map(repo => {
            console.log(repo.name);
            return <RepoItem repo={repo} key={repo.id} />;
          })}
        </SimpleGrid>
      </VStack>
    </div>
  );
};

export default Repos;

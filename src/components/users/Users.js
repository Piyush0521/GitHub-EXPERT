import React, { useContext } from 'react';
import UserItem from './UserItem';
import { SimpleGrid, Spinner, Center } from '@chakra-ui/react';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    <Center>
      <Spinner
        size={'xl'}
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red.500"
        mt="50vh"
      />
    </Center>;
  } else {
    return (
      <div>
        <SimpleGrid
          spacing={6}
          margin="8"
          templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(3, 1fr)' }}
        >
          {users.map(user => {
            return <UserItem user={user} key={user.id} />;
          })}
        </SimpleGrid>
      </div>
    );
  }
};

export default Users;

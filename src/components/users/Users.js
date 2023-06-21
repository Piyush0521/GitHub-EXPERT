import React, { useContext } from 'react';
import UserItem from './UserItem';
import { SimpleGrid, Spinner, Center } from '@chakra-ui/react';
import GithubContext from '../../context/github/githubContext';
import { Card, CardHeader, Heading, Button, Image } from '@chakra-ui/react';
import { BiErrorCircle } from 'react-icons/bi';

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
          {users.length !== 0 ? (
            users.map(user => {
              return <UserItem user={user} key={user.id} />;
            })
          ) : (
            <Card
              width={{ sm: '90vw', md: '30vw' }}
              alignItems="center"
              background="#1a365d"
              color="whiteAlpha.900"
            >
              <CardHeader>
                <Center gap="1rem">
                  <BiErrorCircle size="2rem" />
                  <Heading size="md" letterSpacing="1px" fontSize="1.3rem">
                    Nothing to show
                  </Heading>
                </Center>
              </CardHeader>
            </Card>
          )}
        </SimpleGrid>
      </div>
    );
  }
};

export default Users;

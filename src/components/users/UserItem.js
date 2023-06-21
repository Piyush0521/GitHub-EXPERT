import React from 'react';

import {
  Card,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <div>
      <Card
        width={{ sm: '90vw', md: '30vw' }}
        alignItems="center"
        justifyItems="center"
        boxShadow="2xl"
        background="whiteAlpha"
      >
        <CardHeader>
          <Image boxSize="70px" borderRadius="100" src={avatar_url}></Image>
          <Heading size="md"> {login}</Heading>
        </CardHeader>
        <CardFooter>
          <Link to={`/user/${login}`}>
            <Button colorScheme="blue" variant="solid" size="sm">
              Know More...
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserItem;

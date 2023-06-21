import React, { useContext, useEffect } from 'react';
import {
  Spinner,
  Box,
  Center,
  Flex,
  VStack,
  Image,
  Text,
  Button,
  HStack,
  Divider,
} from '@chakra-ui/react';

import { RiCloseCircleFill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Repos from '../repos/repos';
import GithubContext from '../../context/github/githubContext';

const User = () => {
  const { login } = useParams();

  const githubContext = useContext(GithubContext);

  const {
    getUser,
    getRepos,

    user: {
      name,
      company,
      html_url,
      avatar_url,
      repos_url,
      location,
      email,
      blog,
      hireable,
      bio,
      public_repos,
      public_gists,
      followers,
    },
    repos,
    loading,
  } = githubContext;

  useEffect(() => {
    console.log(login);
    getRepos(login);
    getUser(login);
  }, []);
  if (loading) {
    <Center>
      <Spinner
        size={'xl'}
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="white"
        mt="50vh"
      />
    </Center>;
  } else {
    return (
      <div>
        <Center>
          <Box
            backgroundColor="whiteAlpha.900"
            my={{ base: '5', md: '5' }}
            mx={{ base: '5rem', md: '15rem' }}
            width={'90vw'}
            borderRadius="1rem"
            boxShadow="dark-lg"
            pt="1rem"
          >
            <Center>
              <HStack
                spacing={1}
                boxShadow="outline"
                px="1rem"
                borderRadius="1rem"
              >
                <Text fontWeight="bold" fontSize="1.2rem">
                  Hireable
                </Text>
                {hireable ? (
                  <RiCloseCircleFill color="red" size="1.2rem" />
                ) : (
                  <TiTick color="green" size="1.5rem" />
                )}
              </HStack>
            </Center>
            <Box px={{ base: '10', md: '20' }} py={{ base: '6', md: '10' }}>
              <Flex justify="space-around" mb="2rem">
                <VStack spacing={5}>
                  <Image
                    src={avatar_url}
                    borderRadius="100%"
                    boxSize={{ base: '5rem', md: '8rem' }}
                    boxShadow="dark-lg"
                  />
                  <VStack spacing={0}>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'lg', md: '2xl' }}
                    >
                      {name}
                    </Text>
                    {location && (
                      <HStack>
                        <Text fontWeight="semibold">Location:</Text>
                        <Text>{location}</Text>
                      </HStack>
                    )}
                  </VStack>
                </VStack>
                <VStack spacing={2}>
                  {bio && (
                    <Box maxWidth={{ base: '40vw', md: '35vw' }}>
                      <VStack spacing={0}>
                        <Text fontWeight="bold" fontSize="1.1rem">
                          Bio
                        </Text>
                        <Text lineHeight={1.2}>{bio}</Text>
                      </VStack>
                      <Divider h="1px" backgroundColor="gray.500" my="1rem" />
                    </Box>
                  )}
                  <Link to={html_url}>
                    <Button colorScheme="facebook" size="sm">
                      Visit GitHub Profile
                    </Button>
                  </Link>
                  <VStack spacing={0} align="flex-start">
                    <HStack>
                      <Text fontWeight="semibold">Username:</Text>
                      <Text>{login}</Text>
                    </HStack>
                    {company && (
                      <HStack>
                        <Text fontWeight="semibold">Company:</Text>
                        <Text>{company}</Text>
                      </HStack>
                    )}
                    {blog && (
                      <HStack>
                        <Text fontWeight="semibold">Website:</Text>
                        <Box>
                          <Link to={blog}>
                            <Text
                              _hover={{
                                color: 'blue.700',
                              }}
                            >
                              {blog}
                              {/* {email} */}
                            </Text>
                          </Link>
                        </Box>
                      </HStack>
                    )}
                  </VStack>
                </VStack>
              </Flex>
              <Divider h="2px" backgroundColor="gray.500" mb="1rem" />
              <Center>
                <HStack>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    isActive
                    variant="outline"
                  >
                    Followers: {followers}
                  </Button>

                  <Button
                    colorScheme="blue"
                    size="sm"
                    isActive
                    variant="outline"
                  >
                    Following: {followers}
                  </Button>

                  <Link href={`${html_url}?tab=repositories`}>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      isActive
                      variant="outline"
                    >
                      Public Repos: {public_repos}
                    </Button>
                  </Link>
                  <Link href={`${html_url}?tab=gists`}>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      isActive
                      variant="outline"
                    >
                      Public Gists: {public_gists}
                    </Button>
                  </Link>
                </HStack>
              </Center>
              <Divider h="2px" backgroundColor="gray.500" my="1rem" />
              {console.log(repos)}
              <Repos repos={repos} />
            </Box>
          </Box>
        </Center>
      </div>
    );
  }
};

export default User;

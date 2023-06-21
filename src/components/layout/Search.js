import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  Alert,
  AlertIcon,
  VStack,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [searchText, setSearchText] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchText);
    if (searchText.length <= 0) {
      console.log('ERROR: Search Text is Empty');
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    } else {
      githubContext.searchUsers(searchText);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl display="flex" flexDirection="row" m="5">
          <HStack>
            <VStack align="flex-start">
              <Input
                type="text"
                placeholder="Enter the text here..."
                size="md"
                width="70vw"
                color="whiteAlpha.900"
                onChange={e => {
                  setSearchText(e.target.value);

                  console.log(searchText);
                }}
              />
              {alert && (
                <Box>
                  <Alert status="error" colorScheme="facebook">
                    <AlertIcon />
                    Please enter something to search
                  </Alert>
                </Box>
              )}
            </VStack>
            {githubContext.users.length > 0 && (
              <Button
                borderRadius="100%"
                p={0}
                marginX={1}
                onClick={() => githubContext.clearUsers()}
              >
                <MdClear size={20} />
              </Button>
            )}
          </HStack>
          <Button
            type="submit"
            width="100px"
            variant="solid"
            colorScheme="blue"
            ml={3}
          >
            <HStack>
              <Text>Search</Text>
              <BiSearch size="15" />
            </HStack>
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Search;

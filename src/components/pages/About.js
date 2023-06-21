import { Box, Center, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import githubLogo from '../../images/githubLogo.png';

const About = () => {
  return (
    <div>
      <Box
        color="whiteAlpha.900"
        mx={{ base: '2rem', md: '5rem' }}
        my={{ base: '2rem', md: '3rem' }}
      >
        <Flex direction={{ base: 'column', md: 'row' }} gap="1rem">
          <Box
            boxSize="8rem"
            width={{ base: '30vw', md: '30vw' }}
            alignSelf={{ base: 'center', md: 'flex-start' }}
          >
            <Image src={githubLogo} />
          </Box>

          <VStack
            width={{ base: '85vw', md: '50vw' }}
            textAlign="justify"
            fontWeight={{ md: '500' }}
            letterSpacing={{ base: '0', md: '0.3px' }}
            fontSize={{ md: '1.1rem' }}
          >
            <Text>
              At GitHub Expert, our goal is to simplify the process of finding
              and connecting with developers on GitHub. With our intuitive
              interface and powerful search functionality, you can easily locate
              specific GitHub profiles and gain instant access to their most
              recent repositories.
            </Text>
            <Text>
              We understand the importance of efficient knowledge sharing and
              collaboration within the developer community. That's why we
              provide a comprehensive range of features and insights to enhance
              your experience. From detailed user profiles showcasing their
              contributions, followers, and activity on GitHub, to statistics
              and trends about popular programming languages and project sizes,
              we empower you to make informed decisions when exploring and
              engaging with developers. Our commitment to privacy and security
              means that your data is handled with the utmost care. We
              prioritize the protection of your personal information and ensure
              that all interactions on our platform are secure. GitHub Expert is
              continuously evolving to meet the ever-changing needs of the
              developer community. We value your feedback and suggestions as we
              strive to improve our services and provide you with the best
              possible experience.
            </Text>
            <Text>
              Join us at GitHub Expert and unlock the vast potential of GitHub.
              Start exploring GitHub profiles and their recent repositories
              today to connect, collaborate, and contribute to the world of
              software development.
            </Text>
          </VStack>
        </Flex>
      </Box>
    </div>
  );
};

export default About;

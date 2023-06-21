import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import About from './components/pages/About';
import User from './components/pages/User';
import GithubState from './context/github/GithubState';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GithubState>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Search />
                  <Users />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user/:login" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GithubState>
    </ChakraProvider>
  );
}

export default App;

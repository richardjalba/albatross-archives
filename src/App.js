import React from 'react';
import Home from './pages/Home';
//
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='App'>
      <Header>
        <h1>
          <img src='' alt='' /> Albatross <br />
          <span>Gaming</span> Archives
        </h1>
      </Header>
      <GlobalStyles />
      <Home />
    </div>
  );
}

const Header = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;

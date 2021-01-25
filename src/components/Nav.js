import React, { useState } from 'react';
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.PNG';
//Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <div className='head'>
          <img src={logo} alt='logo' />
          <div>
            <h1>Albatross</h1> <br />
            <h3>
              <span>Gaming</span>
              Archives
            </h3>
          </div>
        </div>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          SEARCH
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem 0 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.55rem;
    padding: 0.5rem 0.5rem 0.6rem 0.5rem;
    border: none;
    margin-top: 1rem;
    border-radius: 15px 0 0 15px;
    font-family: 'Poppins', sans-serif;
  }
  button {
    font-size: 1.34rem;
    border: none;
    padding: 0.8rem 2rem;
    cursor: pointer;
    background: darkorange;
    color: black;
    border-radius: 0 15px 15px 0;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }
  button:hover {
    color: white;
    background: orange;
  }
  h1 {
    margin-bottom: 0px;
    line-height: 0px;
  }
  h3 {
    font-family: 'Sonsie One', cursive;
    color: white;
    margin-top: 0px;
    padding: 0px;
    font-size: 1.9rem;
    line-height: 0px;
    position: relative;
    top: 0%;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: xx-large;
  cursor: pointer;
  color: white;
  img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    margin-right: 5px;
  }
  .head {
    display: flex;
    align-items: center;
  }
`;

export default Nav;

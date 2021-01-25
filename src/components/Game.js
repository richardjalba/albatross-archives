import React from 'react';
// sugar, spice, and everything nice
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from 'react-redux';
import loadDetail from '../actions/detailActions';

const Game = ({ name, released, image, id }) => {
  // Show game Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{released}</p>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;
  img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export default Game;

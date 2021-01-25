import React from 'react';
// sugar, spice, and everything nice
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animations';

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 7px 30px rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  background-color: white;
  img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export default Game;

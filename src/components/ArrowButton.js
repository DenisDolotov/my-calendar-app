import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Button } from './WeekCalendar.styles';

const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? FaAngleLeft : FaAngleRight;
  return (
    <Button onClick={onClick}>
      <Icon />
    </Button>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
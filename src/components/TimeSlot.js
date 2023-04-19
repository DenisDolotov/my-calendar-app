import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SlotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 40px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 14px;
  font-weight: 500;
  color: #333;

`;

const TimeSlot = ({ time }) => {
  return <SlotContainer>{time}</SlotContainer>;
};

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeSlot;

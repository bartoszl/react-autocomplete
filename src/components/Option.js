import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionItem = styled.li`
  width: 100%;  
`;

const OptionItemInner = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

const Option = ({ onClick, option }) => (
  <OptionItem>
    <OptionItemInner onClick={() => onClick(option)} type="button">
      { option }
    </OptionItemInner>
  </OptionItem>
);

Option.propTypes = {
  onClick: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};

export default Option;

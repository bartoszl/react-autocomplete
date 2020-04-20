import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './Option';

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #888;
`;

const Options = ({ options, onSelect, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  if (!options || !options.length) {
    return (
      <OptionsList>
        No results were found.
      </OptionsList>
    );
  }

  return (
    <OptionsList>
      { options.map((option) => (
        <Option key={option} onClick={() => onSelect(option)} option={option} />
      ))}
    </OptionsList>
  );
};

Options.propTypes = {
  onSelect: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
};

Options.defaultProps = {
  isOpen: false,
  options: null,
};

export default Options;

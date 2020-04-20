import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionItem = styled.li`
  width: 100%;  
`;

const OptionItemInner = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ active }) => (active ? '#bbb' : 'white')};
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

const Highlight = styled.span`
  color: green;
`;

const Option = ({
  onClick, option, highlightMatch, value, active,
}) => {
  const renderOption = () => {
    if (highlightMatch) {
      const split = option.split(new RegExp(`(${value})`, 'gi'));

      return (
        <span>
          {split.map((part) => (part.toLowerCase() === value.toLowerCase()
            ? <Highlight>{part}</Highlight>
            : part))}
        </span>
      );
    }

    return option;
  };

  return (
    <OptionItem>
      <OptionItemInner onClick={() => onClick(option)} type="button" active={active}>
        { renderOption() }
      </OptionItemInner>
    </OptionItem>
  );
};

Option.propTypes = {
  onClick: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  value: PropTypes.string,
  highlightMatch: PropTypes.bool,
};

Option.defaultProps = {
  highlightMatch: false,
  value: null,
};

export default Option;

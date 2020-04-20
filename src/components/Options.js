import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './Option';

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #888;
  border-radius: 3px;
  max-height: 350px;
  overflow: scroll;
`;

const NoResults = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
`;

class Options extends Component {
  render() {
    const {
      options, onSelect, isOpen, highlightMatch, value, noResultsText, activeIndex, accessor,
    } = this.props;

    if (!isOpen) {
      return null;
    }

    if (!options || !options.length) {
      return (
        <OptionsList>
          <NoResults>
            { noResultsText }
          </NoResults>
        </OptionsList>
      );
    }

    return (
      <OptionsList>
        { options.map((option, i) => {
          const parsedOption = typeof option === 'object' ? option[accessor] : option;

          return (
            <Option
              key={parsedOption}
              onClick={() => onSelect(option)}
              option={parsedOption}
              highlightMatch={highlightMatch}
              value={value}
              active={activeIndex === i}
            />
          );
        })}
      </OptionsList>
    );
  }
}

Options.propTypes = {
  onSelect: PropTypes.func.isRequired,
  highlightMatch: PropTypes.bool,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
  noResultsText: PropTypes.string,
  value: PropTypes.string,
  activeIndex: PropTypes.number,
};

Options.defaultProps = {
  isOpen: false,
  options: null,
  highlightMatch: false,
  noResultsText: 'No results were found.',
  value: null,
  activeIndex: null,
};

export default Options;

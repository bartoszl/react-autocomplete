import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Options extends Component {
  render() {
    const { options, onSelect, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    if (!options || !options.length) {
      return 'No results were found.';
    }

    return (
      <ul>
        { options.map((option) => (
          <li key={option}>
            <button onClick={() => onSelect(option)} type="button">
              { option }
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AutoInput from './AutoInput';
import Options from './Options';
import AutocompleteWrapper from './AutocompleteWrapper';

const Label = styled.label`
  padding-bottom: 0.5rem;
  display: block;
`;
const KEYS = {
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ENTER: 13,
};

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autocompleteValue: '',
      isOpen: false,
      pointer: 0,
    };

    this.handleAutocompleteChange = this.handleAutocompleteChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleAutocompleteChange(e) {
    const { onSearch } = this.props;
    const { value } = e.target;

    this.setState({
      autocompleteValue: e.target.value,
      isOpen: true,
    });

    onSearch(value);
  }

  handleClear() {
    const { onSelect } = this.props;

    this.setState({
      autocompleteValue: '',
      isOpen: false,
    });

    onSelect(null);
  }

  handleSelect(value) {
    const { onSelect } = this.props;

    this.setState({
      autocompleteValue: value,
      isOpen: false,
    });

    onSelect(value);
  }

  handleClose() {
    this.setState({
      isOpen: false,
      pointer: -1,
    });
  }

  handleKeyDown(e) {
    const { options } = this.props;
    const { pointer } = this.state;

    if (e.keyCode === KEYS.UP_ARROW) {
      e.preventDefault();
      let newPointer = pointer - 1;
      if (newPointer < 0) {
        newPointer += options.length;
      }
      this.setState({
        pointer: newPointer,
      });
    } else if (e.keyCode === KEYS.DOWN_ARROW) {
      e.preventDefault();
      this.setState({
        pointer: (pointer + 1) % options.length,
      });
    } else if (e.keyCode === KEYS.ENTER && pointer !== -1) {
      e.preventDefault();
      this.handleSelect(options[pointer]);
    }
  }

  render() {
    const {
      options, placeholder, label, highlightMatch, name,
    } = this.props;
    const { autocompleteValue, isOpen, pointer } = this.state;

    return (
      <AutocompleteWrapper onClickOutside={this.handleClose}>
        { label && (
        <Label>
          { label }
        </Label>
        ) }
        <AutoInput
          name={name}
          value={autocompleteValue}
          options={options}
          onChange={this.handleAutocompleteChange}
          onClear={this.handleClear}
          placeholder={placeholder}
          onKeyDown={this.handleKeyDown}
        />
        <Options
          options={options}
          onSelect={this.handleSelect}
          isOpen={isOpen}
          highlightMatch={highlightMatch}
          value={autocompleteValue}
          activeIndex={pointer}
        />
      </AutocompleteWrapper>
    );
  }
}

Autocomplete.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  highlightMatch: PropTypes.bool,
};

Autocomplete.defaultProps = {
  placeholder: 'Search...',
  label: null,
  highlightMatch: false,
};


export default Autocomplete;

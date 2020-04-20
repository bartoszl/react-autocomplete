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

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autocompleteValue: '',
      isOpen: false,
    };

    this.handleAutocompleteChange = this.handleAutocompleteChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    });
  }

  render() {
    const {
      options, placeholder, label, highlightMatch,
    } = this.props;
    const { autocompleteValue, isOpen } = this.state;

    return (
      <AutocompleteWrapper onClickOutside={this.handleClose}>
        { label && (
        <Label>
          { label }
        </Label>
        ) }
        <AutoInput
          name="autocomplete"
          value={autocompleteValue}
          options={options}
          onChange={this.handleAutocompleteChange}
          onClear={this.handleClear}
          placeholder={placeholder}
        />
        <Options
          options={options}
          onSelect={this.handleSelect}
          isOpen={isOpen}
          highlightMatch={highlightMatch}
          value={autocompleteValue}
        />
      </AutocompleteWrapper>
    );
  }
}

Autocomplete.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
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

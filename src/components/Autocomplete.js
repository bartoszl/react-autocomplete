import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoInput from './AutoInput';
import Options from './Options';

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

  render() {
    const { options, placeholder } = this.props;
    const { autocompleteValue, isOpen } = this.state;

    return (
      <>
        <AutoInput
          name="autocomplete"
          value={autocompleteValue}
          options={options}
          onChange={this.handleAutocompleteChange}
          onClear={this.handleClear}
          placeholder={placeholder}
        />
        <Options options={options} onSelect={this.handleSelect} isOpen={isOpen} />
      </>
    );
  }
}

Autocomplete.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

Autocomplete.defaultProps = {
  placeholder: 'Search...',
};


export default Autocomplete;

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PADDING_VERTICAL = '0.5rem';
const PADDING_HORIZONTAL = '1rem';
const FONT_SIZE = '0.8rem';

const ClearButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  top: ${PADDING_VERTICAL};
  right: 0;
  border: none;
  color: red;
  background-color: transparent;
  padding: 0;
  font-size: ${FONT_SIZE};
  cursor: pointer;
  padding: 0 ${PADDING_VERTICAL};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box; 
  padding: ${PADDING_VERTICAL} ${PADDING_HORIZONTAL};
  border-radius: 3px;
  border: 1px solid #888;
  font-size: ${FONT_SIZE};

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

class AutoInput extends Component {
  render() {
    const {
      value, onChange, name, placeholder, onClear, onKeyDown,
    } = this.props;

    return (
      <Wrapper>
        <Input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          data-testid="autocomplete-input"
        />
        { value && (
          <ClearButton onClick={onClear} data-testid="clear-button">
            &times;
          </ClearButton>
        )}
      </Wrapper>
    );
  }
}

AutoInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
};

AutoInput.defaultProps = {
  placeholder: 'Search...',
  onClear: undefined,
  onKeyDown: undefined,
};

export default AutoInput;

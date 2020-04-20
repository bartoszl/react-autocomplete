import React from 'react';
import styled from 'styled-components';

const PADDING_VERTICAL = '0.5rem';
const PADDING_HORIZONTAL = '1rem';
const FONT_SIZE = '0.8rem';

const ClearButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  display: ${({ value }) => (!value ? 'none' : 'flex')};
  position: absolute;
  top: ${PADDING_VERTICAL};
  right: 0;
  border: none;
  color: red;
  background-color: transparent;
  padding: 0;
  font-size: ${FONT_SIZE};
  justify-content: flex-start;
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

export default function AutoInput({
  value, onChange, name, placeholder, onClear, onKeyDown,
}) {
  return (
    <Wrapper>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
      <ClearButton value={value} onClick={onClear}>
        &times;
      </ClearButton>
    </Wrapper>
  );
}

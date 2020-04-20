import React from 'react';
import styled from 'styled-components';

const ClearBtn = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  color: red;

  &:hover {

  }
`;

function ClearButton({ value, onClear }) {
  if (!value) {
    return null;
  }

  return (
    <ClearBtn onClick={onClear}> x </ClearBtn>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
`;

export default function AutoInput({
  value, onChange, name, placeholder,
}) {
  return (
    <Wrapper>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ClearButton value={value} onClear={() => console.log('clear')} />
    </Wrapper>
  );
}

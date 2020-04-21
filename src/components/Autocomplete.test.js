import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import Autocomplete from './Autocomplete';

const setup = ({ options, noResultsText }) => {
  const onSelect = jest.fn();
  const onSearch = jest.fn();

  const { getByTestId } = render((
    <Autocomplete
      onSearch={onSearch}
      onSelect={onSelect}
      name="asd"
      options={options}
      noResultsText={noResultsText}
    />
  ));

  const input = getByTestId('autocomplete-input');

  return {
    input,
    getByTestId,
    onSelect,
    onSearch,
  };
};

const mockOptions = ['testaaa', 'testbbb', 'testccc'];

describe('Autocomplete', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('calls onSearch on input change event', () => {
    const { onSearch, input } = setup({ options: [] });

    fireEvent.change(input, { target: { value: 'asd' } });

    expect(onSearch.mock.calls.length).toBe(1);
  });

  it('renders the right message for no options', async () => {
    const noResults = 'No results';
    const { input } = setup({ options: [], noResultsText: noResults });

    fireEvent.change(input, { target: { value: 'asd' } });

    expect(screen.getByTestId('autocomplete-no-options')).toBeTruthy();
    expect(screen.getByText(noResults)).toBeTruthy();
  });

  it('renders a list of options if options present', async () => {
    const { input } = setup({ options: mockOptions });

    fireEvent.change(input, { target: { value: 'asd' } });

    expect(screen.getByTestId('autocomplete-options-list')).toBeTruthy();
    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeTruthy();
    });
  });

  it('fills in text input with the right string value on option click', async () => {
    const { input } = setup({ options: mockOptions });

    fireEvent.change(input, { target: { value: 'asd' } });

    const opt = mockOptions[0];
    const optionOne = screen.getByText(opt);
    fireEvent.click(optionOne);
    expect(input.value).toBe(opt);
  });

  it('hides options on click outside', () => {
    render((
      <>
        <Autocomplete
          onSearch={() => null}
          onSelect={() => null}
          name="asd"
          options={['a']}
        />
        <div data-testid="outside" />
      </>
    ));

    fireEvent.change(screen.getByTestId('autocomplete-input'), { target: { value: 'asd' } });

    expect(screen.getByTestId('autocomplete-options-list')).toBeTruthy();

    fireEvent.click(screen.getByTestId('outside'));

    expect(screen.queryByTestId('autocomplete-options-list')).toBeFalsy();
  });

  describe('Clear Button', () => {
    it('clear button to be hidden if input is empty', async () => {
      setup({ options: mockOptions });

      expect(screen.queryByTestId('clear-button')).toBeFalsy();
    });

    it('clear button present when input is filled in', async () => {
      const { input } = setup({ options: mockOptions });

      fireEvent.change(input, { target: { value: 'asd' } });

      expect(screen.getByTestId('clear-button')).toBeTruthy();
    });

    it('clear input when clear button is clicked', async () => {
      const { input } = setup({ options: mockOptions });

      fireEvent.change(input, { target: { value: 'asd' } });

      const clearBtn = screen.getByTestId('clear-button');

      fireEvent.click(clearBtn);

      expect(screen.getByTestId('autocomplete-input').value).toBeFalsy();
    });
  });
});

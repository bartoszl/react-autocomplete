import React, { Component } from 'react';
import styled from 'styled-components';
import Autocomplete from './components/Autocomplete';
import { getCountries } from './helpers';

const Wrapper = styled.div`
  width: 25%;
  margin: 5rem auto;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      value: null,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  async handleSearch(search) {
    try {
      const { data } = await getCountries(search);

      const parsedCountries = data.map((country) => country.name);

      this.setState({
        options: parsedCountries,
      });
    } catch (err) {
      this.setState({
        options: [],
      });
    }
  }

  handleSelect(value) {
    this.setState({
      value,
    });
  }

  render() {
    const { options, value } = this.state;

    return (
      <Wrapper>
        <div style={{ marginBottom: '4rem' }}>
          Selected value:
          {' '}
          {value}
        </div>
        <Autocomplete
          onSearch={this.handleSearch}
          options={options}
          placeholder="Name a country..."
          label="Country search: "
          onSelect={this.handleSelect}
        />

      </Wrapper>
    );
  }
}

export default App;

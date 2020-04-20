import React, { Component } from 'react';
import styled from 'styled-components';
import Autocomplete from './components/Autocomplete';

const Wrapper = styled.div`
  width: 25%;
  margin: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    console.log(search);

    this.setState({
      options: [
        'a',
        'b',
        'c',
      ],
    });
  }

  render() {
    const { options } = this.state;

    return (
      <Wrapper>
        <Autocomplete
          onSearch={this.handleSearch}
          options={options}
          placeholder="Name a country..."
          label="Country search: "
          onSelect={(v) => console.log(v)}
        />
      </Wrapper>
    );
  }
}

export default App;

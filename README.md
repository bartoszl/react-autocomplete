This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Autocomplete React Component 

In the project directory, you can run: 

### `npm start`


## Autocomplete Props

```javascript
Autocomplete.propTypes = {
  /* 
    Triggered on change of the autocomplete input.
    Receives argument which is the value of the text input.
  */
  onSearch: PropTypes.func.isRequired,
  /* 
    Triggered when an option is selected.
    Receives an argument which is the option being selected. (either object or string)
  */
  onSelect: PropTypes.func.isRequired,
  /*
    Array of options, accepts objects and strings.
    If array of objects is supplied, accessor prop should be provided.
  */
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  /* 
  Boolean specifying of searched phrase should be highlighed in options.
  */
  highlightMatch: PropTypes.bool,
  /* See options */
  accessor: PropTypes.string,
  /* Text to be displayed if no options matching search phrase were found */
  noResultsText: PropTypes.string,
};

Autocomplete.defaultProps = {
  placeholder: 'Search...',
  label: null,
  highlightMatch: false,
  accessor: 'id',
  noResultsText: undefined,
};
```


## Examples


### Options as array of strings

```javascript
const options = ['a', 'b'];

const handleSearch = (text) => {
  ...
}

const handleSelect = (value) => {
  // value will be the option string
  ...
}

<Autocomplete
  onSearch={handleSearch}
  options={options}
  placeholder="Name a country..."
  label="Country search: "
  onSelect={handleSelect}
  name="autocomplete"
  highlightMatch
/>

```

### Options as array of objects

```javascript
const options = [{
  name: 'a',
}, {
  name: 'b',
}];

const handleSearch = (text) => {
  ...
}

const handleSelect = (value) => {
  // value will be the whole selected object
  ...
}

<Autocomplete
  onSearch={handleSearch}
  options={options}
  placeholder="Name a country..."
  label="Country search: "
  onSelect={handleSelect}
  name="autocomplete"
  highlightMatch
  accessor="name" // specifies the field in the object to be listed in options
/>
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Autocomplete React Component 

In the project directory, you can run: 

### `npm start`


## Autocomplete Props

```javascript
Autocomplete.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  highlightMatch: PropTypes.bool,
};
```

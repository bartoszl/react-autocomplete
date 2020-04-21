import axios from 'axios';

export const getCountries = async (search) => {
  const countries = await axios.get(`https://restcountries.eu/rest/v2/name/${search}`);

  return countries;
};

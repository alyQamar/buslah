import { countries, languages } from 'countries-list';

export const getAllLanguages = () => {
  const { he, ...filteredLanguages } = languages;
  return filteredLanguages;
};

export const getAllCountries = () => {
  const { IL, ...filteredCountries } = countries;
  return filteredCountries;
};

export const getAllCountryNames = () => {
  const countries = getAllCountries();
  return Object.values(countries).map(({ name }) => name);
};

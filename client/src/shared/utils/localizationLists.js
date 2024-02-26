import { countries, languages } from 'countries-list';

export const getAllLanguages = () => {
  const { he, ...filteredLanguages } = languages;
  return filteredLanguages;
};

export const getAllCountries = () => {
  const { IL, ...filteredCountries } = countries;
  return filteredCountries;
};

export const getAllLanguageNames = () => {
  const languages = getAllLanguages();
  return Object.values(languages).map(({ name }) => name);
};

export const getAllCountryNames = () => {
  const countries = getAllCountries();
  return Object.values(countries).map(({ name }) => name);
};

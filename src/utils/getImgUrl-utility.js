import { countries } from "../constants/countries";

function getCountryImgPath(countryName) {
  const country = countries.find(
    (item) => item?.country.toLowerCase() === countryName.toLowerCase()
  );
  const path = country?.path;

  return new URL(`../assets/${path}`, import.meta.url).href;
}

function getImgUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

export { getCountryImgPath, getImgUrl };

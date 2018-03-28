const fetch = require("node-fetch");
const R = require("ramda");
const url = "http://countryapi.gear.host/v1/Country/getCountries";

const nameSearch = key => value => `p${key}=${value}`;

const countries = (parent, args, context, info) => {
  const searchQuery = Object.keys(args).map(key => nameSearch(key)(args[key]));
  const concat = searchQuery.join("&");
  const finalUrl = searchQuery ? `${url}?${concat}` : url;
  console.log(finalUrl);
  return fetch(finalUrl)
    .then(res => res.json())
    .then(json => json.Response)
    .catch(err => err);
};
module.exports = {
  countries
};

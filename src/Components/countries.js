import axios from "axios";

var ApiKey = "8BBG5TBBQTMP";

var url = `http://api.timezonedb.com/v2.1/list-time-zone?key=${ApiKey}&format=json`;
async function countries() {
  var country = await axios.get(url);
  var allCountry = country.data.zones.map((c) => ({
    name: c.countryName,
    continent: c.zoneName,
  }));
  return allCountry;
}

export default countries;

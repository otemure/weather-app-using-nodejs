const geoCode = async (cityName) => {
  const apiKey = "bb7a3ae2195ed411f1ca1be6475aa5ec";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const resObj = await response.json();
  if (resObj.cod != 200) {
    throw new Error(resObj.message);
  } else {
    return resObj;
  }
};
module.exports = geoCode;

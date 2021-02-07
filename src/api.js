const host = "https://fakerapi.it/";
const weatherHost = "https://api.openweathermap.org/data/2.5/weather?q=";
const locationHost = "https://ipgeolocation.abstractapi.com/v1/?api_key=";
export function getLocation() {
  const myKey = "2ba3c530db824b1b8226b104f5ce0fa7";
  const url = `${locationHost}${myKey}`;

  return fetch(url).then(response => response.json());
}
export function getWeather(city) {
  const myKey = "&appid=967fb43b267c7b47ab098dfa515e2f9e";
  const countSystem = "&units=metric";
  const url = `${weatherHost}${city}${myKey}${countSystem}`;

  return fetch(url).then(response => response.json());
}
export function getProducts(quantity, priceMax) {
  const endPoint = "api/v1/products";
  const parameters = {
    _seed: 7,
    _quantity: quantity,
    _price_max: priceMax
  };
  const searchParams = new URLSearchParams(parameters);
  const url = `${host}${endPoint}?${searchParams}`;

  return fetch(url).then(response => response.json());
}

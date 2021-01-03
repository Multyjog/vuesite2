const host = "https://fakerapi.it/";

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

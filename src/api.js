const host = "https://fa";

export function getProducts(quantity, priceMax) {
  const endPoint = "api/v1/products";
  const parameters = {
    _seed: 7,
    _quantity: quantity,
    _price_max: priceMax
  };
  const searchParams = new URLSearchParams(parameters);
  const url = `${host}${endPoint}?${searchParams}`;
  return fetch(url)
    .then(response => response.json())
    .catch(e => {
      console.log(`Fetch ${url} failed: ${e}`);
      return {
        data: [
          {
            id: 0,
            name: "Non existing 1",
            images: [{ url: "img/error.jpg" }, { url: "img/error.jpg" }],
            description:
              "The FakerAPI server isn't reachable. So I loaded examples to show you something else besides empty page. You still can add this product in cart!",
            net_price: "66666"
          },
          {
            id: 1,
            name: "Non existing 2",
            images: [{ url: "img/error.jpg" }, { url: "img/error.jpg" }],
            description:
              "The FakerAPI server isn't reachable. So I loaded examples to show you something else besides empty page. You still can add this product in cart!",
            net_price: "51541"
          },
          {
            id: 2,
            name: "Non existing 3",
            images: [{ url: "img/error.jpg" }, { url: "img/error.jpg" }],
            description:
              "The FakerAPI server isn't reachable. So I loaded examples to show you something else besides empty page. You still can add this product in cart!",
            net_price: "10025"
          },
          {
            id: 3,
            name: "Non existing 4",
            images: [{ url: "img/error.jpg" }, { url: "img/error.jpg" }],
            description:
              "The FakerAPI server isn't reachable. So I loaded examples to show you something else besides empty page. You still can add this product in cart!",
            net_price: "8500"
          },
          {
            id: 4,
            name: "Non existing 5",
            images: [{ url: "img/error.jpg" }, { url: "img/error.jpg" }],
            description:
              "The FakerAPI server isn't reachable. So I loaded examples to show you something else besides empty page. You still can add this product in cart!",
            net_price: "4155"
          },
          {
            id: 5,
            name: "Non existing 6",
            images: [{ url: "img/error.jpg" }, { url: "img/error.jpg" }],
            description:
              "The FakerAPI server isn't reachable. So I loaded examples to show you something else besides empty page. You still can add this product in cart!",
            net_price: "41255"
          }
        ]
      };
    });
}

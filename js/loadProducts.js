import getProducts from "./getProducts.js";
import createCards from "./createCards.js";

const container = document.querySelector(".cards-container");

let apiURL =
  "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

export default async function loadProducts(url, container) {
  const { products, nextPage } = await getProducts(url);

  const cards = products.map((product) =>
    createCards(
      product.id,
      product.image,
      product.name,
      product.description,
      Number(product.oldPrice).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      Number(product.price).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      product.installments.count,
      Number(product.installments.value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    )
  );

  cards.forEach((card) => {
    container.appendChild(card);
  });

  return (apiURL = `https://${nextPage}`);
}

loadProducts(apiURL, container);

const buttonShowMore = document.querySelector(".button-products");

buttonShowMore.addEventListener("click", async () => {
  await loadProducts(apiURL, container);
});

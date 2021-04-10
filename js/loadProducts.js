import getProducts from "./getProducts.js";
import createCards from "./createCards.js";

export default async function loadProducts(url, container) {

    const { products, nextPage } = await getProducts(url);
    console.log(products)
  
    const nextURL = `https://${nextPage}`
  
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

    return nextURL
}



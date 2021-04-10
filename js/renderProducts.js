import loadProducts from './loadProducts.js'

export default async function renderProducts() {

  const container = document.querySelector(".cards-container");
  const buttonShowMore = document.querySelector('.button-products')

  const currentURL =
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

  const nextURL = await loadProducts(currentURL, container)
  
  buttonShowMore.addEventListener('click', async() => {
    await loadProducts(nextURL, container)
  })

}

renderProducts();


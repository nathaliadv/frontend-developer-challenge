export default function createCards(
  id,
  image,
  name,
  description,
  oldPrice,
  price,
  installmentsCounts,
  installmentsValue
) {
  const card = document.createElement("div");
  card.setAttribute("class", "card-product");
  card.setAttribute("id", `${id}`);

  card.innerHTML = `
    <figure>
        <img class="card-image" src="http:${image}" alt="Product image">
    </figure>
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-description">${description}</p>
        <p class="card-oldPrice">De: ${oldPrice}</p>
        <p class="card-price">Por: ${price}</p>
        <p class="card-installments">ou ${installmentsCounts}x de R$${installmentsValue}</p>
        <button class="card-button" type="submit">Comprar</button>
    </div>
    `;

  return card;
}

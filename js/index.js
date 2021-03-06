// je récupère l'endroit où je veux afficher mes produits

const produits = document.getElementById("items");

// je connecte le site à l'API : si j'ai un résultat correspondant, je retourne le résultat de l'API, sinon, message d'erreur

fetch("http://localhost:3000/api/products/")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  })
  .then((value) => {
    let renduProduit = "";
    value.forEach((element) => {
      renduProduit += `
                <a href="./html/product.html?id=${element._id}">
                    <article>
                        <img src="${element.imageUrl}" alt="${element.altTxt}">
                        <h3 class="productName">${element.name}</h3>
                        <p class="productDescription">${element.description}</p>
                    </article>
                </a>
                `;
    });
    produits.insertAdjacentHTML("afterbegin", renduProduit);
  })
  .catch((error) => {
    console.error(error);
  });

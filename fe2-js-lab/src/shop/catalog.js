export const filtraPerCategoria = (prodotti, categoria) => {
  return prodotti.filter((p) => p.category == categoria);
};
export const etichetteCatalogo = (prodotti) => {
  return prodotti.map(({ title, price }) => {
    return { title, price };
  });
};
export const logEtichette = (etichette) => {
  etichette.forEach((e, index) => {
    console.log(
      "Indice: [",
      index,
      "]\tProdotto:",
      e.title,
      "\tPrezzo:",
      e.price,
    );
  });
};

export const filtraPriceRange = (etichette) => {
  return etichette.filter(({ price }) => price > 50);
};

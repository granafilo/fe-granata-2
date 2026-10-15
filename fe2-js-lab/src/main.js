import { creaCarrelloVuoto, aggiungi, totaleCarrello } from "./shop/cart.js";
import {
  filtraPerCategoria,
  etichetteCatalogo,
  logEtichette,
  filtraPriceRange,
} from "./shop/catalog.js";

import { caricaProdotti } from "./api/api.js";

const avvia = async () => {
  const prodotti = await caricaProdotti();

  console.log(prodotti);

  const categoria = "men's clothing";

  console.log("Prodotti Caricati: ", prodotti.length);

  const MensClothing = filtraPerCategoria(prodotti, categoria);
  console.log(
    "Prodotti della categoria: ",
    categoria,
    "\t ",
    filtraPerCategoria(prodotti, categoria),
  );

  const etichette = etichetteCatalogo(prodotti);
  console.log(etichette);

  logEtichette(etichette);

  let cart = creaCarrelloVuoto();
  console.log("CarrelloVuoto:\t", cart);
  cart = aggiungi(cart, prodotti[0], 1);
  cart = aggiungi(cart, prodotti[4], 3);
  cart = aggiungi(cart, prodotti[4], 3);

  cart.forEach((p) => {
    console.log(
      "ID: [",
      p.id,
      "]\tProdotto:",
      p.title,
      "\tPrezzo:",
      p.price,
      "\tQuantity:",
      p.quantity,
    );
  });

  console.log();

  console.log("Totale Carrello: ", totaleCarrello(cart));
};

avvia();

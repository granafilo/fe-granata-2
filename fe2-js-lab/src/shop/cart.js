export const creaCarrelloVuoto = () => [];

export const aggiungi = (carrello, prodotto, quantita = 1) => {
  const newCarrello = [...carrello];
  let trovato = false;

  newCarrello.forEach(({ id }, index) => {
    if (id == prodotto.id) {
      newCarrello[index].quantity += quantita;
      trovato = true;
      console.log("Quantità aggiornata");
    }
  });

  if (!trovato) {
    console.log("Prodotto aggiunto al carrello");

    newCarrello.push({
      id: prodotto.id,
      title: prodotto.title,
      price: prodotto.price,
      quantity: quantita,
    });
  }

  return newCarrello;
};
export const totaleCarrello = (carrello) => {
  return carrello.reduce(
    (totale, { price, quantity }) => totale + price * quantity,
    0,
  );
};

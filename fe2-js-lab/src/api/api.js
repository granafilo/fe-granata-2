export const caricaProdotti = async () => {
  let data = [];
  try {
    const result = await fetch("https://fakestoreapi.com/products");

    if (result.status !== 200) {
      console.log("Server Error, data not available! Try again later!");
      return [];
    }

    data = await result.json();
  } catch (error) {
    console.log("Error: ", error);
  }

  return data;
};

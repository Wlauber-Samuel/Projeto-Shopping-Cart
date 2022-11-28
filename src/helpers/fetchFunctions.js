export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (item) => {
  if (!item) {
    throw new Error('Termo de busca não informado');
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const { results } = data(endpoint);
  return results;
};

const data = async (endpoint) => {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
};
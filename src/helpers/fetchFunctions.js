export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (term) => {
  if (!term) {
    throw new Error('Termo de busca não informado');
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${term}`;
  const data = await fetch(endpoint);
  const result = await data.json();
  return result.results;
};

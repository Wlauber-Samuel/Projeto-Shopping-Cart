import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listProducts = document.querySelector('.products');
const append = document.querySelector('.cart__products');

const addLoading = () => {
  const carregamento = document.createElement('p');
  carregamento.innerHTML = 'Carregando...';
  carregamento.className = 'loading';
  listProducts.appendChild(carregamento);
};
addLoading();

const removeLoading = () => {
  const removeL = document.querySelector('.loading');
  removeL.remove();
};

const loadingError = () => {
  listProducts.className = 'error';
  listProducts.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
};

const printProductsinScreen = async () => {
  try {
    const products = await fetchProductsList('computador');
    products.forEach((list) => {
      listProducts.appendChild(createProductElement(list));
    });
    removeLoading();
  } catch (error) {
    loadingError();
  }
};

removeLoading();
addLoading();

const saveLocal = () => {
  const id = getSavedCartIDs();
  id.map((element) => {
    const data = fetchProduct(element);
    return Promise.all([data]).then((values) => values
      .map((res) => append.appendChild(createCartProductElement(res))));
  });
};

window.onload = () => {
  printProductsinScreen();
  saveLocal();
}
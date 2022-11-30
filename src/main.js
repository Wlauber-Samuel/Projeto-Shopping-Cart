import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listProducts = document.querySelector('.products');
const carts = document.querySelector('.cart_products');

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
  carts.className = 'error';
  carts.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
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
printProductsinScreen();

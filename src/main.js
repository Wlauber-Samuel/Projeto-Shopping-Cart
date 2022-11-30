import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listProducts = document.querySelector('.products');
const carts = document.querySelector('.cart_products');
const products = await fetchProductsList('computador');

const loading = () => {
  const carregamento = document.createElement('p');
  carregamento.innerHTML = 'Carregando...';
  carregamento.className = 'loading';
  listProducts.appendChild(carregamento);
};
loading();

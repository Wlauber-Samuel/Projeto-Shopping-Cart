import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Testar a função fetchProductsList', () => {
  it('Verifica se fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });
});

it('Verifica se o método fetch foi disparado', async () => {
  await fetchProductsList('computador');
  expect(fetch).toHaveBeenCalled();
});

it('Verifica se a função retorna "Termo de busca não informado" quando nenhum parâmetro é passado', async () => {
  expect(async () => await fetchProductsList()).rejects.toThrow('Termo de busca não informado');
});


it('verificar se o endpoint utilizado é `https://api.mercadolibre.com/sites/MLB/search?q=computador`', async () => {
  await fetchProductsList('computador');
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
});

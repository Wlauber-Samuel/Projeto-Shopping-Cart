import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Verifica se fetchFunction é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Verifica se ao executar a função com o parâmetro "MLB1405519561" fetch foi chamada', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561"', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Verifica se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo', async () => {
    await fetchProduct('MLB1405519561');
  });

  it('quando nenhum parâmetro é passado', async () => {
    expect(async () => await fetchProduct()).rejects
    .toThrow('ID não informado');
  });
});

// faz a importação do pacote axios
import axios from 'axios';

// define a função para chamada das requisições
const api = axios.create({
  // define a URL base das requisições
  //baseURL: 'https://623afa8d2e056d1037eac65b.mockapi.io',
  baseURL: 'http://192.168.3.150:5000/api',
});

// define o padrão de exportação
export default api;
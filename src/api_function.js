// Neste arquivo está sendo utilizada a biblioteca axios para consumir dados de APIs.
import axios from 'axios';


// Foi usada uma função async-await disponível na documentação da Axios, que será chamada no arquivo app.js para acessar os dados das APIs.

//Esta função será responsável por disponibilizar os dados de preço de cada moeda, a variação percentual do preço, o volume vendido nas últimas 24 horas
async function getLastPrice() {
    try {
      
      const response = await axios.get("https://poloniex.com/public?command=returnTicker");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  //Esta função será responsável por disponibilizar dados de volume de troca das moedas nas últimas 24 horas
  async function getDailyVolume() {
    try {
      
      const response = await axios.get("https://poloniex.com/public?command=return24hVolume");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  //Esta função será responsável por disponibilizar informações sobre as moedas, como nome e id para link com as outras tabelas
  async function getCurrenciesInfo() {
    try {
      
      const response = await axios.get("https://poloniex.com/public?command=returnCurrencies");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }






  export { getLastPrice, getDailyVolume, getCurrenciesInfo };
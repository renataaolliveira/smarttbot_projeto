import axios from 'axios';

// Neste arquivo está sendo utilizada a biblioteca axios para consumir dados de APIs.
// Foi usada uma função async-await disponível na documentação da Axios, que será chamada no arquivo XXX para acessar os dados das APIs.

async function getLastPrice() {
    try {
      //tentar colocar o this.props no lugar do link para acessar diversos links com um componente só
      const response = await axios.get("https://poloniex.com/public?command=returnTicker");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  export default getLastPrice;
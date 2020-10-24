import axios from 'axios';

async function getLastPrice() {
    try {
      const response = await axios.get("https://poloniex.com/public?command=returnTicker");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  export default getLastPrice;
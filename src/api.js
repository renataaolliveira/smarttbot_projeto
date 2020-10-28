//Deletar arquivo
import React from 'react';
import axios from 'axios';

//Esse pedaço de código vai consumir a API e disponibilizar na tela em forma de lista

export default class CryptoList extends React.Component {
    //o state foi definido como vazio para que o método this.setState pudesse retornar os dados da API
    constructor(props) {
        super(props);
        this.state = {
            crypto: [],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    
    componentDidMount() {
        //Atribuição dos dados ao state
        axios.get(`https://poloniex.com/public?command=returnTicker`).then(response => {
            console.log(response.data);
            this.setState({ crypto: response.data })
            
        
        });
        //iteração pelo objeto response.data para atribuir cada key/value de last a um parágrafo
        function displayData(data) {
            let output = '';

            for( let info of data) {
                    output += <p>{data.last}</p>;
            };
        }

    }
    //Como renderizar??????
    render() {
        return (
                <div>
                
                    <h3>List of cryptos!</h3>
                    {
                        
                    }
                    
                </div>
        )
    }
}
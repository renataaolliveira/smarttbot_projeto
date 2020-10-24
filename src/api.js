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
        axios.get(`https://poloniex.com/public?command=returnTicker`).then(response => {
            console.log(response.data);
            this.setState({ crypto: response.data })
            
        
        });
    }

    render() {
        return (
                <div>
                
                    <h3>List of cryptos!</h3>
                    <ul>
                        { for (let prop of crypto) {
                            return (
                            <li>{ crypto.prop }</li>
                             ); };
                        
                        {"}"}
                    </ul>
                </div>
        )
    }
}
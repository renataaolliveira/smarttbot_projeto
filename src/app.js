//Este arquivo será responsável por executar as funções que resgatam os dados da API e gerar um loop para percorrer os dados e disponibilizá-los para que sejam renderizados

import React from 'react';
import { getLastPrice, getDailyVolume, getCurrenciesInfo } from './api_function';



class FirstComponent extends React.Component {

    // Função constructor que irá gerar o state. O state será atualizado a cada execução do loop e automaticamente chamará o método render a cada execução para atualizar o DOM
    constructor(props) {
        super(props);
        this.state = {
            price: {},
        };
    };

    // O componentDidMount é o método que receberá os side-effects das funções e atuará durante a fase de montagem do DOM    
    componentDidMount() {

        const respPrice = getLastPrice();

        console.log(respPrice.data);

        const respVolume = getDailyVolume();

        console.log(respVolume.data);

        const respInfo = getCurrenciesInfo();

        console.log(respInfo.data);

        let currency;

        for (currency in respInfo.data) {
            console.log(respInfo.data.data.name);
        }



    // O for iria iterar sobre os propriedades do objeto que resultou do consumo da api no arquivo api_function. Entretanto, houve dificuldades em fazer essa iteração pois o objeto retornado tinha uma série de objetos dentro com propriedades únicas corespondentes aos nomes das moedas.
    // Ao usar .json(), estava retornando undefined.

    
    }

    // O método render vai gerar o código JSX que será inserido no arquivo tabela_dados
    render() {
        return (
            <td>{}</td>
        );
    };
    

};

export default FirstComponent;
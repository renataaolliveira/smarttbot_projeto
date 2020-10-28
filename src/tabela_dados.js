//Este arquivo é responsável por gerar o HTML que irá exibir os dados da API em forma de tabela

import React from 'react';
import './app.css';


export default class TableContent extends React.Component {

    render() {
        return (
            <div className='container'>
                <table>
                    <thead>
                        <tr className='titulo'>
                            <th className='nome'>Nome</th>
                            <th>Código</th>
                            <th className='ultimo-preco'>Último Preço</th>
                            <th className='volume'>Volume (24h)</th>
                            <th className='var'>Var (%)</th>
                        </tr>
                    </thead>
                </table>
            </div>

        )};
};
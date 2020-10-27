import { render } from '@testing-library/react';
import React from 'react';
import './app.css';


export default class TableContent extends React.Component {

    render() {
        return (
            <div className='container'>
                <table>
                    <tr className='titulo'>
                        <th className='nome'>Nome</th>
                        <th>Código</th>
                        <th className='ultimo-preco'>Último Preço</th>
                        <th className='volume'>Volume (24h)</th>
                        <th className='var'>Var (%)</th>
                    </tr>
                </table>
            </div>

        )};
};
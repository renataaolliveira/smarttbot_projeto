// Este arquivo é responsável por gerar o HTML na barra de navegação. Foi separado como um componente à parte para que ficasse mais fácil de estilizar usando o CSS.

import React, { useState } from 'react';
import './app.css';

export const NavBar = () => {
    
    //Esta função foi uma tentativa de criar um eventHandler que seria acionado onClick sobre o elemento 'Moedas'. Quando o usuário clica em 'Moedas', uma segunda barra de navegação se torna disponível logo abaixo da barra de navegação inicial.
    // Quando defini a função usando o destructing assignment, o isShowing não acusou nenhum valor, mesmo eu tendo passando false como argumento. 
    //Tentei atribuir um valor através do this.state, mas também não deu certo. Deve ter faltado algum detalhezinho.
    // O código elaborado para atribuir o eventHandler ao evento está logo abaixo e seria adicionado ao elemento <li>Moedas</li>

    /*const ShowNavMoedas = () => {
        const[isShowing, setIsShowing] = useState(false);
        function onClick() {
            setIsShowing(true);
    }
    this.state = { isShowing: false }

    onClick={onClick}> { isShowing ? <HiddenNavBar /> : "" }
    */

        return (
            <div>
                <nav>
                        <ul className='parent-ul'>
                            <li className='home'>Home</li>
                            <li>Moedas</li>
                            <li>WikiCripto</li>
                            <li>Notícias</li>
                            <li>Análises</li>
                        </ul>
                        <button className='login-button'>Log In</button>
                        <button className='signin-button'>Sign In</button>
                        
                </nav>
                <div className='barra-laranja'></div>    
                
            </div>
        );

};

// Esta função é responsável por gerar o HTML da "barra secundária" de navegação. Foi separada da barra "primária" de navegação para facilitar a visualização

export const HiddenNavBar = () => {
        return (
            <div className='barra-inferior'> 
                
                        <ul>
                            <li className='inferior lista'>Lista de Criptomoedas</li>
                            <li className='inferior conversor'>Conversor</li>
                            <li className='inferior graficos'>Gráficos</li>
                        </ul>
            </div>  
        )
};
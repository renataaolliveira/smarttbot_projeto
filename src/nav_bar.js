import React, { useState } from 'react';
import './app.css';

export const NavBar = () => {
    
    //this.state = { isShowing: false }

    //Esta função é um eventHandler que será acionado onClick sobre o elemento 'Moedas'. Quando o usuário clica em 'Moedas', uma segunda barra de navegação se torna disponível logo abaixo da barra de navegação inicial.
    /*const ShowNavMoedas = () => {
        const[isShowing, setIsShowing] = useState(false);
        function onClick() {
            setIsShowing(true);
    }*/

        return (
            <div>
                <nav className='nav'>
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

export class HiddenNavBar extends React.Component {
    render() {
        return (
            <div className='barra-inferior'> 
                
                        <ul>
                            <li className='inferior lista'>Lista de Criptomoedas</li>
                            <li className='inferior conversor'>Conversor</li>
                            <li className='inferior graficos'>Gráficos</li>
                        </ul>
            </div>  
        )
    }
}

/*onClick={onClick}> { isShowing ? <HiddenNavBar /> : "" }*/
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
                            <li className='moedas'> Moedas</li>
                            <li className='wiki'><a href="src\paginas extras\wikicripto.html"></a> WikiCripto</li>
                            <li className='noticias'>Notícias</li>
                            <li className='analises'>Análises</li>
                            <li className='end'><button className='login-button'>Log In</button></li>
                            <li className='end'><button className='signin-button'>Sign In</button></li>
                        </ul>
                     
                </nav>
                    
                
            </div>
        );

};

class HiddenNavBar extends React.Component {
    render() {
        return (
            <div className='barra-inferior'> 
                
                        <ul>
                            <li className='inferior cripto'>Criptomoedas:</li>
                            <li className='inferior lista'>Lista de Criptomoedas</li>
                            <li className='inferior conversor'>Conversor</li>
                            <li className='inferior graficos'>Gráficos</li>
                        </ul>
                </div>  
        )
    }
}

/*onClick={onClick}> { isShowing ? <HiddenNavBar /> : "" }*/
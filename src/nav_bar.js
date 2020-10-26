import React from 'react';
import './app.css';

export default class NavBar extends React.Component {


    render() {
        return (
            <div>
                <nav>
                    <div>
                        <ul>
                            <li className='home'>Home</li>
                            <li className='wiki'>WikiCripto</li>
                            <li className='noticias'>Notícias</li>
                            <li className='analises'>Análises</li>
                            <li className='end'><img className='search' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTggNTE1LjU1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzc4LjM0NCAzMzIuNzhjMjUuMzctMzQuNjQ1IDQwLjU0NS03Ny4yIDQwLjU0NS0xMjMuMzMzIDAtMTE1LjQ4NC05My45NjEtMjA5LjQ0NS0yMDkuNDQ1LTIwOS40NDVzLTIwOS40NDQgOTMuOTYxLTIwOS40NDQgMjA5LjQ0NSA5My45NjEgMjA5LjQ0NSAyMDkuNDQ1IDIwOS40NDVjNDYuMTMzIDAgODguNjkyLTE1LjE3NyAxMjMuMzM3LTQwLjU0N2wxMzcuMjEyIDEzNy4yMTIgNDUuNTY0LTQ1LjU2NGMwLS4wMDEtMTM3LjIxNC0xMzcuMjEzLTEzNy4yMTQtMTM3LjIxM3ptLTE2OC44OTkgMjEuNjY3Yy03OS45NTggMC0xNDUtNjUuMDQyLTE0NS0xNDVzNjUuMDQyLTE0NSAxNDUtMTQ1IDE0NSA2NS4wNDIgMTQ1IDE0NS02NS4wNDMgMTQ1LTE0NSAxNDV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" /></li>
                            <li className='end'><button className='login-button'>Log In</button></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}
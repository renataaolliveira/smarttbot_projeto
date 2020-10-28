// Este arquivo está responsável por apenas receber todos os componentes criados e renderizá-los no DM. O intuito dele é deixar o código mais limpo para melhor compreensão de quais componentes estão sendo importados e renderizados.

import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './app';
import { NavBar } from './nav_bar';
import { HiddenNavBar } from './nav_bar';
import TableContent from './tabela_dados';



ReactDOM.render(
<div>
  <NavBar />
  <HiddenNavBar />
  <TableContent />
  <FirstComponent />
</div>
, document.getElementById('root'));
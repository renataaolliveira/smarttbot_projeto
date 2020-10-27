import React from 'react';
import ReactDOM from 'react-dom';
//import CryptoList from './api';
import FirstComponent from './app';
import { NavBar } from './nav_bar';
import { HiddenNavBar } from './nav_bar';
import TableContent from './tabela_dados';


//Retirar
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(
<div>
  <NavBar />
  <HiddenNavBar />
  <TableContent />
  {/*<MyComponentClass />*/}
  <FirstComponent />
</div>
, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
//import CryptoList from './api';
import FirstComponent from './app';
import { NavBar } from './nav_bar';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(
<div>
  <NavBar />
  {/*<MyComponentClass />*/}
  <FirstComponent />
</div>
, document.getElementById('root'));
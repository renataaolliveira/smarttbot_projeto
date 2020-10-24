import React from 'react';
import ReactDOM from 'react-dom';
import CryptoList from './api';
//import FirstComponent from './app';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(
<div>
  <MyComponentClass />
  <CryptoList />
</div>
, document.getElementById('root'));
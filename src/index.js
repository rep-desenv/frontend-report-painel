import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './Card';
import Card2 from './Card2';
import Teste from './teste';


//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Card2 />
//   </React.StrictMode>
// );

// const rootTeste = ReactDOM.createRoot(document.getElementById('root'));
// rootTeste.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootApi = ReactDOM.createRoot(document.getElementById('api'));
rootApi.render(
  <React.StrictMode>
    <Card2 />
  </React.StrictMode>
);

// const rootApi = ReactDOM.createRoot(document.getElementById('api'));
// rootApi.render(
//   <React.StrictMode>
//     <Teste />
//   </React.StrictMode>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


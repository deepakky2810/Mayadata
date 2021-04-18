import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import theme from './utils/unitCoverters';
// import { ThemeProvider } from '@material-ui/core/styles';
import store from './utils/store';

/*
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
*/ 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
 );

serviceWorker.unregister();

// {/* <Provider store={store}>
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>
// </Provider>, */}

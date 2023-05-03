import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, ThemeContext } from './theme-context';
import App from './App';

// Wrap your app with the ThemeProvider component
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


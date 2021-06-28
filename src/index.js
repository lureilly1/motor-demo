import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { Motor } from '@motor-js/core'

ReactDOM.render(
  <React.StrictMode>
    <Motor config={{
      //Enter your app config here..
      host: "motor.eu.qlikcloud.com", // Qlik Sense Host
      secure: true, // Whether your host is secure of not (HTTPS / HTTP)
      port: null, // Qlik Sense site port
      prefix: "", // Prefix
      appId: "bc5878d0-2d3c-49ad-80cb-c35e5fa5cbe9", // Application Id
      webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
      qcs: true, // whether you are connecting to a Qlik Cloud site or not        
      }}
      theme={{
        global: {
          color: {
            brand: '#57a8ff',
            brandLight: 'white'
          }
        }
      }}
      >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Motor>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

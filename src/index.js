import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import KasaHeader from './components/KasaHeader';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route exact path="/">
              <KasaHeader />
              <Home />
              <Footer />
          </Route>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

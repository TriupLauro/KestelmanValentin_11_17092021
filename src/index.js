import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import KasaHeader from './components/KasaHeader';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Error from "./pages/Error";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <KasaHeader />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="*">
                  <Error />
              </Route>
          </Switch>
          <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

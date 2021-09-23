import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import KasaHeader from './components/KasaHeader';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ErrorPage from "./pages/Error";
import About from "./pages/About";
import LocationDetails from "./pages/LocationDetails";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Router>
              <KasaHeader />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route
                      path="/locationDetails/:idQuery"
                      render={props => <LocationDetails {...props} />}
                  />
                  <Route path="*">
                      <ErrorPage />
                  </Route>
              </Switch>
              <Footer />
          </Router>
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

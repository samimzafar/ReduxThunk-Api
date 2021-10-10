import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header/Header";
import Nav from "./Components/NavLinks/Nav";
import { Store } from "./store";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Nav />
        <Route path="/" exact component={Header} />
        <Route path="/Cart" exact component={Cart} />
      </Router>
    </Provider>
  );
}

export default App;

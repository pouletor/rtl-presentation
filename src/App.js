import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavigationMenu from "./organisms/NavigationMenu/NavigationMenu";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <p>RTL presentation</p>
          </h1>
          <NavigationMenu />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

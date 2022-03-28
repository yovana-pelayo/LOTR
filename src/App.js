import './App.css';
import Home from './views/Home/Home';
import { Switch } from 'react-router-dom';
import { React } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './views/Characters/Characters';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

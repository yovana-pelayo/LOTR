import './App.css';
import Home from './views/Home/Home';
import { Switch } from 'react-router-dom';
import { React } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import Header from '';
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dogs">{/* <Characters /> */}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

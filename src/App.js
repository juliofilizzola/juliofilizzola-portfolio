import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/About" component={ About } />
    </Switch>
  );
}

export default App;

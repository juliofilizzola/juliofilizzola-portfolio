import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
    </Switch>
  );
}

export default App;

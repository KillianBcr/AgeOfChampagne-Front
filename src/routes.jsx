import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Autres routes */}
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;

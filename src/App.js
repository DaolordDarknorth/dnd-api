import { Home } from "./Pages/Home";
import { Switch, Route } from 'react-router-dom'
import SingleSpell from "./Pages/SingleSpell";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/:id'>
          <SingleSpell />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

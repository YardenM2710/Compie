import './styles/main.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { MainHeader } from './components/MainHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <main className="container">
          <Switch>{/* <Route path="/" component={Home} /> */}</Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

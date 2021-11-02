import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './pages/home/home.component';
const HatsPage = (props) => (
  <div>
    <button onClick={()=> props.history.push('sub')}>sub</button>
    <Link to="../topics">topics</Link>
    <h1>Hats Page</h1>
  </div>
);
const Topics = (props) => (
  <div>
    <button onClick={()=> props.history.push('sub')}>sub</button>
    <Link to={`${props.match.url}/13`}>Topic 13</Link>
    <Link to={`${props.match.url}/17`}>Topic 17</Link>
    <Link to={`${props.match.url}/21`}>Topic 21</Link>

    <h1>Hats Page</h1>
  </div>
);
const NomanPage = () => (
  <div>
    <h1>Nomans land Page</h1>
  </div>
);
const HatsSubPage = () => (
  <div>
    <h1>Hats Sub Page</h1>
  </div>
);
const HatsWithIdPage = (props) => (
  <div>
    <h1>Hats Id: {props.match.params.hatsId}</h1>
  </div>
);
const topicWithIdPage = (props) => (
  <div>
    <h1>TOpic Id: {props.match.params.topicId}</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/hats/sub" component={HatsSubPage} />
      <Route path="/hats/:hatsId" component={HatsWithIdPage} />
      <Route exact path="/topics" component={Topics} />
      <Route path="/topics/:topicId" component={topicWithIdPage} />
      <Route path="/nomans" component={NomanPage} />

      </Switch>
    </div>
  );
}

export default App;

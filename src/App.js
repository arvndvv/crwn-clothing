import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import {auth} from './firebase/firebase.utils';
class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
        {/* <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/hats/sub" component={HatsSubPage} />
        <Route path="/hats/:hatsId" component={HatsWithIdPage} />
        <Route exact path="/topics" component={Topics} />
        <Route path="/topics/:topicId" component={topicWithIdPage} />
        <Route path="/nomans" component={NomanPage} /> */}
  
        </Switch>
      </div>
    );
  }

}

export default App;

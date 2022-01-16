import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      console.log(userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=>{})
          console.log(snapShot.data());
        })
      }
      else{
        this.setState({currentUser: userAuth})
      }
      // createUserProfileDocument(user)
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
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

import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Page
import HomeScreen from './pages/HomeScreen';
import ShopScreen from './pages/ShopScreen';
import SignInAndSignUp from './pages/SignInAndSignUp';

//Components
import Header from './layout/Header';

// Style
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/sign" component={SignInAndSignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import UserComponent from './components/userComponent'

function App() {
  return (
    //to provide a redux store to our react-application react-redux library exports a Provider component
    // which accepts a store prop in which we have to provide our redux store
    <Provider store={store}> 
      <div className="App">
        <CakeContainer />
        <IceCreamContainer/>
        <UserComponent/>
      </div>
    </Provider>
  );
}

export default App;

import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import {Header} from './components/Header'
function App() {
  return (

    <Provider store={store}>
    <div className="App">
     <Header/>
   
     
    </div>
    </Provider>
  );
}

export default App;

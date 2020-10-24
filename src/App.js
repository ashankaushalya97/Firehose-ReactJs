import {Provider} from 'react-redux';
import store from './redux/store';
import CheckIn from './containers/checkIn/screens';

function App() {
  return (
    <Provider store={store}>
      <CheckIn/>
    </Provider>
  );
}

export default App;

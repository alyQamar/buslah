// App.jsx

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;


//path='/signup'

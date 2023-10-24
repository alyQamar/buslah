import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';

import './App.css';

function App() {
  return <div>
  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
</BrowserRouter>
  </div>;
}

export default App;

//

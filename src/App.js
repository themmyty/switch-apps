import './App.css';
import Loginpage from './components/Loginpage';
import CreateAccount from './components/CreateAccount';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/CreateAccount' element={<CreateAccount />}/>
          <Route path='/' element={<Loginpage />}/>
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='/ForgotPassword' element={<ForgotPassword />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


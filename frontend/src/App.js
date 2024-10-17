import { Routes, Route } from 'react-router-dom'; 
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { SendMoney } from './components/SendMoney';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sendmoney" element={<SendMoney />} />
      </Routes>
    </div>
  );
}

export default App;
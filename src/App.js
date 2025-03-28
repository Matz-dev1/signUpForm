import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/SignUpPage';
import SignedIn from './components/SignedIn';
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<SignUpPage action="google.com" buttonText="Subscribe to monthly newslatter"/>} />
      <Route path='/signed-in' element={<SignedIn buttonText="Dismiss message"/>} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/SignUpPage';
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div className="App">
      {/* <Routes>
      <Route path='/' element={<SignUpPage action="google.com" buttonText="Subscribe to monthly newslatter"/>} />
      </Routes> */}
      <SignUpPage action="google.com" buttonText="Subscribe to monthly newslatter"/>
    </div>
  );
}

export default App;

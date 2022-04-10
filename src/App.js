import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

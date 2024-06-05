import React  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Routes/Login'
import Main from './Routes/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

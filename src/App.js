import { useState } from "react";
import Auth from "./components/auth/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Keys from "./components/keys/keys"
import MenuBar from './components/menu/menu'
import Errors from './components/errors/errors'

function App() {

  const [auth, setAuth] = useState(false)




  return (
    auth ?
    <BrowserRouter>
    <MenuBar/>
      <Routes>
        <Route element={<Keys/>} path="/"/>
        <Route element={<Errors/>} path="/errors"/>
        <Route element={<Keys/>} path="*"/>
      </Routes>
    </BrowserRouter>

  :
  <BrowserRouter>
    <Routes>
      <Route element={<Auth setAuth={setAuth}/>} path="*"/>
    </Routes>
  </BrowserRouter>



  );
}

export default App;

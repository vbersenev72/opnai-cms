import { useState } from "react";
import Auth from "./components/auth/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Keys from "./components/keys/keys"
import MenuBar from './components/menu/menu'
import Errors from './components/errors/errors'
import Requests_filter from "./components/requests_filter/requests_filter";

function App() {

  const [auth, setAuth] = useState(false)




  return (
    auth ?
    <BrowserRouter>
    <MenuBar/>
      <Routes>
        <Route element={<Keys/>} path="/"/>
        <Route element={<Errors/>} path="/errors"/>
        <Route element={<Requests_filter/>} path="/requests_filter"/>
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

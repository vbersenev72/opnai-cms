import { useState } from "react";
import Auth from "./components/auth/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Keys from "./components/keys/keys";
import MenuBar from './components/menu/menu'

function App() {

  const [auth, setAuth] = useState(false)


  return (
    auth ?
    <BrowserRouter>
    <MenuBar/>
      <Routes>
        <Route element={<Keys/>} path="/"/>
        <Route path="/database" />
        <Route path="/server"/>
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

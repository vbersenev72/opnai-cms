import { useState } from "react";
import Auth from "./components/auth/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Keys from "./components/keys/keys";


function App() {

  const [auth, setAuth] = useState(false)


  return (
    auth ?
    <BrowserRouter>
    <Menu/>
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

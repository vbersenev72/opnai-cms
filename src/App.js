import { useState } from "react";
import Auth from "./components/auth/auth";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Keys from "./components/keys/keys";


function App() {

  const [auth, setAuth] = useState(false)


  return (
    auth ?
    <Routes>
      <Route element={<Keys/>} path="/"/>
      <Route path="/database" />
      <Route path="/server"/>
    </Routes>
  :
    <Routes>
      <Route element={<Auth setAuth={setAuth}/>} path="/"/>
    </Routes>


  );
}

export default App;

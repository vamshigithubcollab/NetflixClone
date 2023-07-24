import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path="/Main" exact Component={Main}> </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
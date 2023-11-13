import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import User from "./pages/User/Index";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound/Index";
import Food from "./pages/Food";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/n" element={<NotFound />} />
        <Route path="/nyam" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

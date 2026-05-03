import { useState } from "react";
import "./App.css";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <>
      <AdminLogin />
      <UserLogin />
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import LoginForm from "./components/QrScanner";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;

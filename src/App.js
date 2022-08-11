import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import PageHome from "./pages/PageHome/PageHome";
import PageLogin from "./pages/PageLogin/PageLogin";
import PageSignUp from "./pages/PageSignUp/PageSignUp";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/signup" element={<PageSignUp />} />
      </Routes>
    </>
  );
}

export default App;

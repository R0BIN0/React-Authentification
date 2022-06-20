// General
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import PrivateContent from "./pages/PrivateContent/PrivateContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/private" element={<PrivateContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

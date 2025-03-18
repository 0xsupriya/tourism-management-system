import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import { SignupForm } from "./components/auth/SignupForm";
import { SigninForm } from "./components/auth/SigninForm";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

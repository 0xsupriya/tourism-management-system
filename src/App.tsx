import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import { AboutUs } from "./components/pages/AboutUs";
import { Contact } from "./components/pages/Contact";
import { SignupForm } from "./components/auth/SignupForm";
import { SigninForm } from "./components/auth/SigninForm";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

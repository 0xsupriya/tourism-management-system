import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BeforeAuthNavbar } from "./components/Navbar/BeforeAuthNavbar";
import { AfterAuthNavbar } from "./components/Navbar/AfterAuthNavbar";
import { Home } from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import { SignupForm } from "./components/auth/SignupForm";
import { SigninForm } from "./components/auth/SigninForm";
import { useAuth, AuthProvider } from "./context/authContext";

function App() {
  const { isAuthenticated } = useAuth(); // isAuthenticated is now correctly typed

  return (
    <BrowserRouter>
      {isAuthenticated ? <AfterAuthNavbar /> : <BeforeAuthNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

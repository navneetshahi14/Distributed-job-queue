import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import MainBody from "./components/Dashboard/MainBody";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center bg-[#F5F2E9]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="mainbody" element={<MainBody />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

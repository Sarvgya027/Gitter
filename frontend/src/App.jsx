import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function App() {
  const { authUser, loading } = useAuthContext();
  if(loading) return null;
  // console.log(authUser)
  return (
    <>
      <div className="flex text-white">
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={'/'} />} />
            <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={'/'} />} />
            <Route path="/explore" element={authUser ? <ExplorePage /> : <Navigate to={'/login'} />} />
            <Route path="/likes" element={authUser ? <LikesPage /> : <Navigate to={'/login'} />} />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;

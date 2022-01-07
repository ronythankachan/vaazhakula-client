import "./App.css";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import useAuth from "./hooks/useAuth";

function App() {
  const user = useAuth();
  console.log("user is", user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

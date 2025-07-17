import UserForm from "./components/UserForm";
import AllUsers from "./components/AllUsers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/users" element={<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

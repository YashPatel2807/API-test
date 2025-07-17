/**
 * Main React application component.
 * Sets up client-side routing for UserForm and AllUsers components.
 */

import UserForm from "./components/UserForm";
import AllUsers from "./components/AllUsers";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        <Routes>
          {/* Route for user creation form */}
          <Route path="/" element={<UserForm />} />
          {/* Route to display all users */}
          <Route path="/users" element={<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

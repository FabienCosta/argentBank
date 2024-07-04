import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import { HomePage } from "./pages/HomePage";
import { User } from "./pages/User";
import { SignIn } from "./pages/SignIn";
import { Error } from "./pages/Error";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<User />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };

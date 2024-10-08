import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import { HomePage } from "./pages/homepage/HomePage";
import { User } from "./pages/user/User";
import { Error } from "./pages/error/Error";
import { Footer } from "./components/footer/Footer";
import { SignIn } from "./pages/signIn/SignIn";
import { Header } from "./components/header/Header";

export const App = () => {
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
        <Footer />
      </BrowserRouter>
    </>
  );
};

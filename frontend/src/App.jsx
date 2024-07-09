import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import { HomePage } from "./pages/homepage/HomePage";
import { User } from "./pages/user/User";
import { SignIn } from "./pages/signIn/SignIn";
import { Error } from "./pages/error/Error";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

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

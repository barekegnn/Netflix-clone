import React from "react";
import Header from "../../Components/Header/Header";
import SignIn from "../../Components/Login-Box/Sign-in";
import Footer from "../../Components/Footer/Footer";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <Header />
      <main className="login-page__main">
        <SignIn />
      </main>
      <Footer />
    </div>
  );
}

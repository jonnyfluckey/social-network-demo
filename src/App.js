import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase/Firebase";
import SocialFeed from "./components/SocialFeed";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Navbar />
      <PostForm />
      <SocialFeed />
    </>
  );
}

export default App;

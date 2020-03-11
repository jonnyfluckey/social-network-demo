import React, { useState } from "react";
import firebase from "../firebase/Firebase";
import axios from "axios";

export default function PostForm() {
  const [post, setPost] = useState("");
  const [user, setUser] = useState("JFluckey");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/.netlify/functions/createPost", { user, post })
      .then(res => {
        alert(res.data);
        setPost("");
      })
      .catch(err => {
        alert(`There was an error: ${err}`);
      });
  };

  return (
    <>
      <h2>Enter Post:</h2>
      <form onSubmit={handleSubmit}>
        <textarea onChange={e => setPost(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get("/.netlify/functions/readPosts")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  if (posts) {
    return (
      <>
        {posts.map(post => {
          return (
            <div>
              <h6>{post.post}</h6>
              <p>{post.user}</p>
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <div>
        <h1>There are no posts</h1>
      </div>
    );
  }
}

export default SocialFeed;

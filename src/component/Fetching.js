import React, { useEffect, useState } from "react";

export default function FetchPosts(props) {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchdata = async()=>{

      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        setPosts(data.slice(0,9))
      } catch{
        console.log("error")
      }
    }
    fetchdata();
  },[])

  return (
    <div style={{
      color: props.mode.color,
      backgroundColor: props.mode.backgroundColor, 
    }}>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );

}

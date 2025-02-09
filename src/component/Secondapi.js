  import React, { useEffect, useState } from "react";

  export default function FetchPosts(props) {
    const [jokes, setJokes] = useState({ name: "", age: null, count: null });

    useEffect(() => {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data=> setJokes(data)))    
    }, []);
  return(
      
  jokes &&<div style={{
    color: props.mode.color,
    backgroundColor: props.mode.backgroundColor, 
  }} >
          <h1>Random Jokes</h1>
          <strong>{jokes.count}</strong>
        <p>{jokes.setup}</p> <p> {jokes.punchline}</p>
      </div>
  )


  }
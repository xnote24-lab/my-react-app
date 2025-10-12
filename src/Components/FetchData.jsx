import React from 'react';
import { useState, useEffect } from 'react';

export default function FetchData() {
    // Step 1: Define state variables
    const [posts,setPosts] = useState([]);// create variable for post
    const [loading,setLoading] = useState(true); // create variable for loading
    const [error,setError] = useState(null);// create variable for show error while fetching data
    // Step 2: Fetch data when component mounts
    useEffect(() =>{
        async function fetchPosts() {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                //await tells javascript to wait for a promise to finish before moving to next line
                // fetch is asynchrnous function it returns a promise-something that will finish later
                //await pauses your code until that promise is resolved-i.e data is received
                if(!response.ok){
                    throw new Error("Network response was not ok")
                }
                const data = await response.json();
                setPosts(data.slice(0,10));// show only first 10 posts
            }catch (err){
                setError(err.message);
            }finally {
                setLoading(false);
            }
        }
        fetchPosts();
    },[]// ← Empty dependency array = run only once after first render
); 
// Step 3: Conditional rendering
if(loading){
    return <h2 style={{padding:"2rem"}}>⏳ Loading posts...</h2>
}
if(error){
    return <h2 style={{padding:"2rem",color:"red"}}>⚠️ Error: {error}</h2>
}
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🌐 Blog Posts</h1>
      <button onClick={() => window.location.reload()}>🔄 Refresh</button>
      <ul>
        {posts.map((post) =>(
            <li key={post.id}>
                {/*access the title property of the post object*/}
                <strong>{post.title}</strong>
                {/*access the body/content property of the post object*/}
                <p>{post.body}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

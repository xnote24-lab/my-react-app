import React from 'react';
import { useState, useEffect } from 'react';

export default function FetchData() {
    // Step 1: Define state variables
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    // Step 2: Fetch data when component mounts
    useEffect(() =>{
        async function fetchPosts() {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
                <strong>{post.title}</strong>
                <p>{post.body}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

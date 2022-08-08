import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';
import icon from './icon.png'

function Main() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    // axios.get('http://kittaxipool.iptime.org:3000/api/rooms')
    axios.get('http://localhost:3001/api/rooms')
    .then((res) => {
      console.log(res.data)
      setPosts(res.data);
    })
    .catch(err => console.log(err, '통신 실패!!'))
  }

  useEffect(getPosts, []);
  
  return(
    <div className="main">
      <h2 class="title">LIST</h2>
      <hr></hr>

      <li items={posts}/>

      <form className="search">
        <p class="search-title">검색</p>
        <input type="text" placeholder="출발지: " name="startpoint" />
        <input type="text" placeholder="도착지: " name="endpoint" />
        <button type="submit">검색</button>
      </form>
    </div>
    )
}

export default Main;
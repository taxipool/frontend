import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';
import icon from './icon.png'

function Main() {
  // const [starttime, totalmember, createtime] = useState(null);
  // const [data, setData, leaderid, roomname, startpoint, endpoint] = useState('');

  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     this.isLogin = false;
  //   } else {
  //     this.isLogin = true;
  //   }

  //   axios.get('http://taxipool.iptime.org:8080/api/rooms/')
  //   .then(res => setData(res.data))
  //   .catch(res => console.log('통신 실패!!'))
  // },
  // [])
  
  return(
    <div className="main">
      <h2 class="title">LIST</h2>
      <hr></hr>
      <a href="/create"><div class="create_room">방 생성</div></a>
      <ul>
        <a href="/view"><li>
          <img src={icon} className="icon"></img><br/>
          <div className="wrap">
            {/* <div>{`장소: ${endpoint}`}</div>
            <div>날짜: </div> */}
            <div>장소: </div>
            <div>날짜: </div>
            <div>시간: </div>
            <div>1/4</div>
          </div>
        </li></a>
        <a href="/view"><li>
          <img src={icon} className="icon"></img><br/>
          <div className="wrap">
            <div>장소: </div>
            <div>날짜: </div>
            <div>시간: </div>
            <div>1/4</div>
          </div>
        </li></a>
        <a href="/view"><li>
          <img src={icon} className="icon"></img><br/>
          <div className="wrap">
            <div>장소: </div>
            <div>날짜: </div>
            <div>시간: </div>
            <div>1/4</div>
          </div>
        </li></a>
        <a href="/view"><li>
          <img src={icon} className="icon"></img><br/>
          <div className="wrap">
            <div>장소: </div>
            <div>날짜: </div>
            <div>시간: </div>
            <div>1/4</div>
          </div>
        </li></a>
        <a href="/view"><li>
          <img src={icon} className="icon"></img><br/>
          <div className="wrap">
            <div>장소: </div>
            <div>날짜: </div>
            <div>시간: </div>
            <div>1/4</div>
          </div>
        </li></a>
        <a href="/view"><li>
          <img src={icon} className="icon"></img><br/>
          <div className="wrap">
            <div>장소: </div>
            <div>날짜: </div>
            <div>시간: </div>
            <div>1/4</div>
          </div>
        </li></a>

        <ul class="pagination">
          <button class="page_btn">◀</button>
          <li>1</li>/
          <li>5</li>
          <button class="page_btn">▶</button>
        </ul>
      </ul>
          
      <form className="search">
        <p className="search_title">검색</p>
        <input type="text" placeholder="출발지: " name="startpoint" />
        <input type="text" placeholder="도착지: " name="endpoint" />
        <button type="submit">검색</button>
      </form>
    </div>
    )
}

export default Main;
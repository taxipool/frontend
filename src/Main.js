import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css';
import icon from './icon.png'

import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColumn';
import CommonTableRow from './table/CommonTableRow';

function GetData() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    // axios.get('http://kittaxipool.iptime.org:3000/api/rooms')
    axios.get('http://localhost:3000/api/rooms')
    .then((res)=> {
      console.log(res.data)
      setData(res.data);
    })
    .catch(err => console.log(err, '통신 실패!!'))
  }, []);

  const goView = (e) => {
    console.log("click")
    window.location.href = '/view/'+e;
  }

  const item = (Object.values(data)).map((item) => {
    return (
      <tr key={item.id} onClick={() => {goView(item.roomno)}}>
        <CommonTableColumn>{item.leaderid}</CommonTableColumn>
        <CommonTableColumn>{item.roomname}</CommonTableColumn>
        <CommonTableColumn>{item.startpoint}</CommonTableColumn>
        <CommonTableColumn>{item.endpoint}</CommonTableColumn>
        <CommonTableColumn>{item.starttime.slice(0,10)}</CommonTableColumn>
        <CommonTableColumn>{item.starttime.slice(11,13)}시 {item.starttime.slice(14,16)}분</CommonTableColumn>
        <CommonTableColumn>{item.currentmember}</CommonTableColumn>
        <CommonTableColumn>{item.totalmember}</CommonTableColumn>
      </tr>
    )
  });

  return item;
}

function Main() {
  const item = GetData();
  
  return(
    <div className="main">
      <h2 class="title">LIST</h2>
      <hr></hr>

      <CommonTable headersName={['방장', '제목', '출발지', '도착지', '출발 날짜', '출발 시간', '현재 인원', '모집 인원']}>
        {item}
      </CommonTable>

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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';
import icon from './icon.png'

import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColumn';
import CommonTableRow from './table/CommonTableRow';

function GetData() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://kittaxipool.iptime.org:3000/api/rooms')
    .then((res)=> {
      console.log(res.data)
      setData(res.data);
    })
    .catch(err => console.log(err, '통신 실패!!'))
  }, []);

  const item = (Object.values(data)).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.leaderid}</CommonTableColumn>
      <CommonTableColumn>{item.roomname}</CommonTableColumn>
      <CommonTableColumn>{item.startpoint}</CommonTableColumn>
      <CommonTableColumn>{item.endpoint}</CommonTableColumn>
      <CommonTableColumn>{item.starttime}</CommonTableColumn>
      <CommonTableColumn>{item.currentmember}</CommonTableColumn>
      <CommonTableColumn>{item.totalmember}</CommonTableColumn>
      <CommonTableColumn>{item.createtime}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Main() {
  const item = GetData();
  
  return(
    <div className="main">
      <h2 class="title">LIST</h2>
      <hr></hr>

      <CommonTable headersName={['방장', '제목', '출발지', '도착지', '시각', '인원', '생성일']}>
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
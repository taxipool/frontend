import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Update.css';

const OnClickUpdate = () => {
    alert("HI");
    let obj = {
        roomname: "myroom",
        startpoint: "start",
        endpoint: "end",
        starttime: "2022-03-03 20:30:00",
        totalmember: 3,
        currentmember: 1
    };

    let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"

    let config = {
        headers: { Authorization: `Bearer ${accessToken}` }
     };
    
    //axios.put('http://taxipool.iptime.org:8080/api/rooms/13', obj, config)
    axios.put('http://localhost:1000/api/rooms/13', obj, config)
    .then(res => {
            console.log(res);
            if (res.status == 200)
            {
                alert('방 수정이 완료되었습니다!');
            }
            else
            {
                alert('방 수정에 실패했습니다.');
            }
            // token = sessionStorage.getItem('token');
        }
    )
    .catch(err => {
        alert('방 수정에 실패했습니다. catch');
        console.log(err)}
    )
}

function Update() {

    const [inputs, setData] = useState({
        roomname: "",
        startpoint: "",
        endpoint: "",
        starttime: ""
    })
    
    const onInputChange = (e) => {
        const { value, key } = e.target;
        setData({
            ...inputs,
            [key] : value
        })
    }



    return(
        <div class="update">
            <h2 class="title">UPDATE</h2>
            <hr></hr>
            <div>
                <div>
                    <label class="roomname" htmlFor='input_roomname'>방제</label>
                    <label class="totalmember" htmlFor='input_totalmember'>인원</label>
                </div>
                <div>
                    <input class="roomname_i" type='text' name='input_roomname' value={inputs.roomname} onChange={onInputChange} placeholder="방제를 작성해주세요"/>
                    <input class="totalmember_i" type='number' min="1" max="3" name='input_totalmember' placeholder="모집인원"/>
                </div>
            </div>
            <div>
                <div>
                    <label class="startpoint" htmlFor='input_startpoint' value = {inputs.startpoint}>출발지</label>
                    <label class="endpoint" htmlFor='input_endpoint' value = {inputs.endpoint}>도착지</label>
                </div>
                <div>
                    <input class="startpoint_i" type='text' name='input_startpoint' placeholder="자세히 작성해주세요"/>
                    <input class="endpoint_i" type='text' name='input_endpoint' placeholder="자세히 작성해주세요"/>
                </div>
            </div>
            <div>
                <div>
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <label class="starttime" htmlFor='input_starttime' value = {inputs.starttime}>출발 시간</label>
                </div>
                <div>
                    <input class="startdate_ia" type='number' min="1" max="12" name='input_startdate' placeholder="월"/>
                    <input class="startdate_ib" type='number' min="1" max="31" name='input_startdate' placeholder="일"/>
                    <input class="starttime_ia" type='number' min="1" max="24" name='input_starttime' placeholder="시"/>
                    <input class="starttime_ib" type='number' min="0" max="59" name='input_starttime' placeholder="분"/>
                </div>
            </div>
            <div>
                <a href="/view"><button class="cancel" type='button'>
                    취소
                </button></a>
                <button class="complete" type='submit' onClick={OnClickUpdate}>
                    완료
                </button>
            </div>
        </div>
    )
}

export default Update;
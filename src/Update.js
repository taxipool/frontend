import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Update.css';

/*
    - 칸 다시 맞추기 ok
    - 뺄 거 빼기
    - 가능하면 datepicker 이용
    - 완료됐을 때 페이지 이동 ok

    - 완료됐을 때 페이지 이동 되는지 테스트
    - 데이터 불러오기 잘 뜨는지 테스트
*/

function Update() {

    const [roomname, setRoomname] = useState('')
    const [startpoint, setStartpoint] = useState('')
    const [endpoint, setEndpoint] = useState('')
    const [starttime, setStarttime] = useState('')

    const handleRoomname = (e) => setRoomname(e.target.value);
    const handleStartpoint = (e) => setStartpoint(e.target.value);
    const handleEndpoint = (e) => setEndpoint(e.target.value);
    const handleStarttime = (e) => setStarttime(e.target.value);

    const OnClickUpdate = () => {
        let obj = {
            roomname: roomname,
            startpoint: startpoint,
            endpoint: endpoint,
            starttime: "2022-03-03 20:30:00",
            totalmember: 1,
            currentmember: 1
        };
        console.log(obj);
    
        let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
         };
        
        //axios.put(`http://taxipool.iptime.org:8080/api/rooms/13`, obj, config)
        axios.put(`http://kittaxipool.iptime.org:3000/api/rooms/1`, obj, config)
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
        .finally(()=> {
            window.location.href = '/main';
        })
    }

    return(
        <div class="update">
            <h2 class="title">UPDATE</h2>
            <hr></hr>
            <div className="a">
                <div>
                    <label class="roomname" htmlFor='input_roomname'>방제</label>
                    <br></br>
                    <input class="roomname_i" type='text' name='input_roomname' value={roomname} onChange={handleRoomname} placeholder="방제를 작성해주세요"/>
                </div>
                <div>
                    <label class="totalmember" htmlFor='input_totalmember'>인원</label>
                    <br></br>
                    <input class="totalmember_i" type='number' min="1" max="3" name='input_totalmember' placeholder="모집인원"/>
                </div>
                <div>
                    <label class="startpoint" htmlFor='input_startpoint'>출발지</label>
                    <br></br>
                    <input class="startpoint_i" type='text' name='input_startpoint' value={startpoint} onChange={handleStartpoint} placeholder="자세히 작성해주세요"/>
                </div>
                <div>
                    <label class="endpoint" htmlFor='input_endpoint'>도착지</label>
                    <br></br>
                    <input class="endpoint_i" type='text' name='input_endpoint' value={endpoint} onChange={handleEndpoint} placeholder="자세히 작성해주세요"/>
                </div>
                <div>
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <br></br>
                    <input type='date' value="2022-09-01" min="2022-08-25" max="2030-12-31" onChange={handleStarttime}/>
                </div>
                <div>
                    <label class="starttime" htmlFor='input_starttime' value = {starttime} onChange={handleStarttime}>출발 시간</label>
                    <br></br>
                    <input class="startdate_i" type='number' min="1" max="24" name='input_starttime' placeholder="시"/>
                    <input class="startdate_i" type='number' min="0" max="59" name='input_starttime' placeholder="분"/>
                </div>
            </div>
            
            <div>
                <button class="cancel" type='button' onClick="history.go(-1)">
                    취소
                </button>
                <button class="complete" type='submit' onClick={OnClickUpdate}>
                    완료
                </button>
            </div>
        </div>
    )
}

export default Update;
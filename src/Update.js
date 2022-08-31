import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Update.css';

/*
    - 칸 다시 맞추기 ok
    - 뺄 거 빼기 ok
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
    const [totalmember, setTotalmember] = useState('')
    

    const handleRoomname = (e) => setRoomname(e.target.value);
    const handleStartpoint = (e) => setStartpoint(e.target.value);
    const handleEndpoint = (e) => setEndpoint(e.target.value);
    const handleStarttime = (e) => setStarttime(e.target.value);
    const handleTotalmember = (e) => setTotalmember(e.target.value);

    useEffect(() => {
        let accessToken = sessionStorage.getItem("access_token");
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}`}
         };

        axios.get(`http://kittaxipool.iptime.org:3000/api/rooms/${window.location.pathname.slice(8, )}`, config)
        .then(res => {
            console.log(config);
            setRoomname(res.data.room.roomname);
            setStartpoint(res.data.room.startpoint);
            setEndpoint(res.data.room.endpoint);
            setStarttime(res.data.room.starttime.slice(0,16));
            setTotalmember(res.data.room.totalmember);
            }
        )
        .catch(err => console.log(err))
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

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
    
        let accessToken = sessionStorage.getItem("access_token");
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
         };
        
        //axios.put(`http://taxipool.iptime.org:8080/api/rooms/13`, obj, config)
        axios.put(`http://kittaxipool.iptime.org:3000/api/rooms/${window.location.pathname.slice(8, )}`, obj, config)
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
            //window.location.href = '/main';
        })
    }

    return(
        <div class="update">
            <h2 class="title">UPDATE</h2>
            <hr></hr>
            <div className="a">
                <div>
                    <label>방제</label>
                    <br></br>
                    <input type='text' value={roomname} onChange={handleRoomname} placeholder="방제를 작성해주세요"/>
                </div>
                <div>
                    <label>인원</label>
                    <br></br>
                    <input type='number' min="1" max="3" value={totalmember} onChange={handleTotalmember} placeholder="모집인원"/>
                </div>
                <div>
                    <label>출발지</label>
                    <br></br>
                    <input type='text' value={startpoint} onChange={handleStartpoint} placeholder="자세히 작성해주세요"/>
                </div>
                <div>
                    <label>도착지</label>
                    <br></br>
                    <input type='text' value={endpoint} onChange={handleEndpoint} placeholder="자세히 작성해주세요"/>
                </div>
                <div>
                    <label>출발 날짜 및 시간</label>
                    <br></br>
                    <input type='datetime-local' value = {starttime} onChange={handleStarttime}/>
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
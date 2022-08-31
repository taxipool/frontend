import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Create.css';

/*
    - 칸 맞추기 ok 8/25
    - 날짜 포맷팅하기 (datepicker 이용) ok 8/25

    - 글 작성 테스트
*/

function Create() {

    const [roomname, setRoomname] = useState('')
    const [startpoint, setStartpoint] = useState('')
    const [endpoint, setEndpoint] = useState('')
    const [starttime, setStarttime] = useState('')
    const [totalmember, setTotalmemeber] = useState('')

    const handleRoomname = (e) => setRoomname(e.target.value);
    const handleStartpoint = (e) => setStartpoint(e.target.value);
    const handleEndpoint = (e) => setEndpoint(e.target.value);
    const handleStarttime = (e) => setStarttime(e.target.value);
    const handleTotalmember = (e) => setTotalmemeber(e.target.value);

    const OnClickCreate = () => {
        let obj = {
            roomname: roomname,
            startpoint: startpoint,
            endpoint: endpoint,
            starttime: starttime,
            totalmember: totalmember,
            createmember: 4 - totalmember,
        }
        let accessToken = sessionStorage.getItem("access_token");
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
         };
        
        console.log(obj);
        // axios.post('http://taxipool.iptime.org:8080/api/rooms', inputs, config)
        axios.post(`http://kittaxipool.iptime.org:3000/api/rooms${window.location.pathname.slice(8, )}`, obj, config)
        .then(res => {
                console.log(res);
                if (res.status == 200)
                {
                    alert('방 등록이 완료되었습니다!');
                    window.location.href = '/main';
                }
                else
                {
                    alert('방 등록에 실패했습니다.');
                }
            }
        )
        .catch(err => console.log(err))
    }
    
    return(
        <div class="create">
            <h2 class="title">CREATE</h2>
            <hr></hr>
            <div>
                <label>방제</label>
                <br></br>
                <input type='text' placeholder="방제를 작성해주세요" onChange={handleRoomname} value={roomname} />
            </div>
            <div>
                <label>인원</label>
                <br></br>
                <input type='number' min="1" max="3" placeholder="모집인원" onChange={handleTotalmember} value={totalmember} />
            </div>
            <div>
                <label>출발지</label>
                <br></br>
                <input type='text' placeholder="자세히 작성해주세요" onChange={handleStartpoint} value={startpoint} />
            </div>
            <div>
                <label>도착지</label>
                <br></br>
                <input type='text' placeholder="자세히 작성해주세요" onChange={handleEndpoint} value={endpoint} />
            </div>
            <label>출발 날짜 및 시간</label>
            <br></br>
            <input type='datetime-local' min="2022-08-25 00:00" max="2030-12-31 23:59" onChange={handleStarttime} vlaue={starttime}/>
            <br></br>
            <div>
                <a href="/main"><button class="cancel" type='button'>
                    취소
                </button></a>
                <button class="complete" type='submit' onClick={OnClickCreate}>
                    완료
                </button>
            </div>
        </div>
    )
}

export default Create;
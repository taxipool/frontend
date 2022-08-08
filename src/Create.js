import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Create.css';

/*
    - 칸 맞추기
    - 날짜 포맷팅하기 (datepicker 이용)
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
        axios.post('http://localhost:3001/api/rooms', obj, config)
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
                <div>
                    <label class="roomname" htmlFor='input_roomname'>방제</label>
                    <label class="totalmember" htmlFor='input_totalmember'>인원</label>
                </div>
                <div>
                    <input class="roomname_i" type='text' name='input_roomname' placeholder="방제를 작성해주세요" onChange={handleRoomname} value={roomname} />
                    <input class="totalmember_i" type='number' min="1" max="3" name='input_totalmember' placeholder="모집인원" onChange={handleTotalmember} value={totalmember} />
                </div>
            </div>
            <div>
                <div>
                    <label class="startpoint" htmlFor='input_startpoint'>출발지</label>
                    <label class="endpoint" htmlFor='input_endpoint'>도착지</label>
                </div>
                <div>
                    <input class="startpoint_i" type='text' name='input_startpoint' placeholder="자세히 작성해주세요" onChange={handleStartpoint} value={startpoint} />
                    <input class="endpoint_i" type='text' name='input_endpoint' placeholder="자세히 작성해주세요" onChange={handleEndpoint} value={endpoint} />
                </div>
            </div>
            <div>
                <div>
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <label class="starttime" htmlFor='input_starttime'>출발 시간</label>
                </div>
                <div>
                    <input class="startdate_ia" type='number' min="1" max="12" name='input_startdate' placeholder="월" onChange={handleStarttime} value={starttime} />
                    <input class="startdate_ib" type='number' min="1" max="31" name='input_startdate' placeholder="일"/>
                    <input class="starttime_ia" type='number' min="1" max="24" name='input_starttime' placeholder="시(24시 기준)"/>
                    <input class="starttime_ib" type='number' min="0" max="59" name='input_starttime' placeholder="분"/>
                </div>
            </div>
            <div>
                <button class="cancel" type='button'>
                    취소
                </button>
                <button class="complete" type='submit' onClick={OnClickCreate}>
                    완료
                </button>
            </div>
        </div>
    )
}

export default Create;
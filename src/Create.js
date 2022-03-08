import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Create.css';

// create 버튼 클릭 이벤트
const onClickCreate = () => {
    let obj = {
        roomname: "myroom",
        startpoint: "start",
        endpoint: "end",
        starttime: new Date(),
        totalmember: 3,
        currentmember: 1
    };

    let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"

    let config = {
        headers: { Authorization: `Bearer ${accessToken}` }
     };
    
    axios.post('http://taxipool.iptime.org:8080/api/rooms', obj, config)
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
            // token = sessionStorage.getItem('token');
        }
    )
    .catch(err => console.log(err))
}

function Create() {
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        
        
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

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
                    <input class="roomname_i" type='text' name='input_roomname' placeholder="방제를 작성해주세요"/>
                    <input class="totalmember_i" type='number' min="1" max="3" name='input_totalmember' placeholder="모집인원"/>
                </div>
            </div>
            <div>
                <div>
                    <label class="startpoint" htmlFor='input_startpoint'>출발지</label>
                    <label class="endpoint" htmlFor='input_endpoint'>도착지</label>
                </div>
                <div>
                    <input class="startpoint_i" type='text' name='input_startpoint' placeholder="자세히 작성해주세요"/>
                    <input class="endpoint_i" type='text' name='input_endpoint' placeholder="자세히 작성해주세요"/>
                </div>
            </div>
            <div>
                <div>
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <label class="starttime" htmlFor='input_starttime'>출발 시간</label>
                </div>
                <div>
                    <input class="startdate_ia" type='number' min="1" max="12" name='input_startdate' placeholder="월"/>
                    <input class="startdate_ib" type='number' min="1" max="31" name='input_startdate' placeholder="일"/>
                    <input class="starttime_ia" type='number' min="1" max="24" name='input_starttime' placeholder="시(24시 기준)"/>
                    <input class="starttime_ib" type='number' min="0" max="59" name='input_starttime' placeholder="분"/>
                </div>
            </div>
            <div>
                <button class="cancel" type='button'>
                    취소
                </button>
                <button class="complete" type='submit' onClick={onClickCreate}>
                    완료
                </button>
            </div>
        </div>
    )
}

export default Create;
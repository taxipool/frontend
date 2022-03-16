import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleComment from './SingleComment'
import './View.css';

/*
    - 댓글 구현
    - 수정, 삭제 => 방장만
    - 타기, 내리기 바뀌는 거
    - 버튼 클릭했을 때 페이지 이동
*/

function OnClickRide() {
    let obj = {
        params: {
            isRide: true,
        }
    };
    
    let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"
    
    let config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };

    let roomnum = 1;

    axios.put(`http://localhost:1000/api/rooms/${roomnum}`, obj, config)
    .then((res) => {
        console.log(res);
        alert('정상적으로 신청되었습니다!');
    })
    .catch((err) => { 
        console.log(err);
        alert('신청에 실패했습니다!');
    })
    
}

function View() {
    const [roomname, setRoomname] = useState('')
    const [startpoint, setStartpoint] = useState('')
    const [endpoint, setEndpoint] = useState('')
    const [starttime, setStarttime] = useState('')
    const [totalmember, setTotalmember] = useState('')
    const [currentmember, setCurrentmember] = useState('')
    const [isLeader, setIsLeader] = useState('')
    const [isRide, setIsRide] = useState('')

    useEffect(() => {
        let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
         };

        axios.get(`http://localhost:1000/api/rooms/${window.location.pathname.slice(6, )}`, '', config)
        .then(res => {
            setRoomname(res.data.room.roomname);
            setStartpoint(res.data.room.startpoint);
            setEndpoint(res.data.room.endpoint);
            setStarttime(res.data.room.starttime);
            setTotalmember(res.data.room.totalmember);
            setCurrentmember(res.data.room.currentmember);
            setIsLeader(res.data.room.leaderid);
            setIsRide(res.data.room.isRide);
            // sessionStorage.setItem('token', res.token);
            // token = sessionStorage.getItem('token');
            }
        )
        .catch(err => console.log(err))
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
        
    return(
        <div class="view">
            <h2 class="title">ROOM</h2>
            <hr></hr>
            <div>
                <label class="roomname">방제 : {roomname}</label>
            </div>
            <div>
                <label class="roomview">
                    <div class="maintext_1">[방정보]</div>
                    <div>출 발 지 : {startpoint}</div>
                    <div>도 착 지 : {endpoint}</div>
                    <div>출발 날짜 : {starttime.slice(0,10)}</div>
                    <div>출발 시간 : {starttime.slice(11,13)+"시 "+starttime.slice(14,16)+"분"}</div>
                    <div>총 인 원 : {totalmember+"명"}</div>
                    <div>현재 인원 : {currentmember}</div>
                </label>
            </div>
            <div>
                <label class="comment"></label>
                    
            </div>
            <div>
                <a href="/main"><button class="list" type='button'>
                    목록
                </button></a>
                <button class="ride" type='submit' onClick={OnClickRide}>
                    타기
                </button>
                <div>
                    {
                        isLeader ? <a href="/Update"><button class="modify" type='button'>
                            수정</button></a>
                        : null
                    }
                </div>
            </div>
        </div>
        )
    }

export default View;
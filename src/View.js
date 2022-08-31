import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css';

/*
    - 댓글 구현
    - 수정, 삭제 => 방장만 ok
    - 타기, 내리기 바뀌는 거 ok
    - 버튼 클릭했을 때 페이지 이동 ok
*/

function View() {
    const [roomname, setRoomname] = useState('')
    const [startpoint, setStartpoint] = useState('')
    const [endpoint, setEndpoint] = useState('')


    const [starttime, setStarttime] = useState('')
    const [totalmember, setTotalmember] = useState('')
    const [currentmember, setCurrentmember] = useState('')
    const [isLeader, setIsLeader] = useState(false)
    const [isRide, setIsRide] = useState(true)

    useEffect(() => {
        let accessToken = sessionStorage.getItem("access_token");
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}`}
         };

        axios.get(`http://kittaxipool.iptime.org:3000/api/rooms/${window.location.pathname.slice(6, )}`, config)
        .then(res => {
            console.log(config);
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

    const OnClickRide = (event) => {
        if (isRide === true)
        {
            document.getElementsByClassName("ride").style.display = "none";
            isRide = false;
            axios.get(`http://kittaxipool.iptime.org:3000/api/rooms/${window.location.pathname.slice(6, )}`, isRide)
        }
        else
        {
            document.getElementsByClassName("rideNo").style.display = "none";
            isRide = true;
            axios.get(`http://kittaxipool.iptime.org:3000/api/rooms/${window.location.pathname.slice(6, )}`, isRide)
        }

        if (isLeader === true)
        {
            document.getElementsByClassName("modify").style.display = "block";
        }
        else
        {
            document.getElementsByClassName("modify").style.display = "none";
        }

        let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"
        
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        
        axios.put(`http://kittaxipool.iptime.org:3000/api/rooms/45`, isRide, config)
        // {roomnum}
        .then((res) => {
            console.log(res);
            alert('정상적으로 신청되었습니다!');
        })
        .catch((err) => { 
            console.log(err);
            alert('신청에 실패했습니다!');
        })
    }

    return(
        <div class="view">
            <h2 class="title">ROOM</h2>
            <hr></hr>
            <div>
                <label class="roomname">방제 : {roomname}</label>
            </div>
            <div>
                <label class="maintext">방정보</label>
                <br></br>
                <div>출 발 지 : {startpoint}</div>
                <div>
                    <label>도 착 지 : {endpoint}</label>
                </div>
                <div>출발 날짜 : {starttime.slice(0,10)}</div>
                <div>출발 시간 : {starttime.slice(11,13)+"시 "+starttime.slice(14,16)+"분"}</div>
                <div>총 인 원 : {totalmember+"명"}</div>
                <div>현재 인원 : {currentmember}</div>
            </div>
            <div>
                <label class="comment"></label>
                    
            </div>
            <div>
                <a href="/main"><button class="list" type='button'>
                    목록
                </button></a>
                <a href="/Update"><button class="modify" style={{"display" : isLeader ? 'inline' : 'none'}} type='button'>
                    수정
                </button></a>
                { isRide === true
                ?
                <button class="rideNo" type='submit' onClick={OnClickRide}>
                    내리기
                </button>
                :
                <button class="ride" type='submit' onClick={OnClickRide}>
                    타기
                </button> }
            </div>
        </div>
        )
    }

export default View;
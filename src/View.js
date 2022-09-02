import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css';

/*
    - 댓글 구현
    - 수정, 삭제 => 방장만 ok
    - 타기, 내리기 바뀌는 거 ok
    - 버튼 클릭했을 때 페이지 이동 ok

    - 타기, 내리기 isRide 값 변경 통신
    - 방장 혼자일 때만 수정 버튼 뜨도록 조건 추가
*/

function View() {
    const [roomno, setRoomno] = useState('')
    const [roomname, setRoomname] = useState('')
    const [startpoint, setStartpoint] = useState('')
    const [endpoint, setEndpoint] = useState('')


    const [starttime, setStarttime] = useState('')
    const [createtime, setCreatetime] = useState('')
    const [totalmember, setTotalmember] = useState('')
    const [currentmember, setCurrentmember] = useState('')
    const [isLeader, setIsLeader] = useState(false)
    const [isRide, setIsRide] = useState(true)

    useEffect(() => {
        let accessToken = sessionStorage.getItem("access_token");
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}`}
         };

        // axios.get(`http://kittaxipool.iptime.org:3000/api/rooms/${window.location.pathname.slice(6, )}`, config)
        axios.get(`http://localhost:3000/api/rooms/${window.location.pathname.slice(6, )}`, config)
        .then(res => {
            setRoomno(res.data.room.roomno);
            setRoomname(res.data.room.roomname);
            setStartpoint(res.data.room.startpoint);
            setEndpoint(res.data.room.endpoint);
            setStarttime(res.data.room.starttime);
            setCreatetime(res.data.room.createtime);
            setTotalmember(res.data.room.totalmember);
            setCurrentmember(res.data.room.currentmember);
            setIsLeader(res.data.room.leaderid);
            setIsRide(res.data.isRide);
            }
        )
        .catch(err => console.log(err))
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    const OnClickRide = (event) => {        
        let accessToken = sessionStorage.getItem('access_token');
        
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        axios.put(`http://localhost:3000/api/rooms/${window.location.pathname.slice(6, )}?isRide=${isRide? false:true}`, isRide, config)
        .then((res) => {
            console.log(res);
            alert('정상적으로 신청되었습니다!');
        })
        .catch((err) => { 
            console.log(err);
            alert('신청에 실패했습니다!');
        })
    }

    const OnClickModify = (roomno) => {
        window.location.href = '/update/'+roomno;
    }
    
    return(
        <div class="view">
            <h2 class="title">ROOM</h2>
            <hr></hr>
            <div>
                <label>방제</label>
                <br></br>
                <div class="value">{roomname}</div>
            </div>
            <div>
                <label>출발지</label>
                <br></br>
                <div class="value">{startpoint}</div>
            </div>
                <label>도착지</label>
                <br></br>
                <div class="value">{endpoint}</div>
            <div>
                <label>출발 날짜</label>
                <br></br>
                <div class="value">{starttime.slice(0,10)}</div>
            </div>
            <div>
                <label>출발 시간</label>
                <br></br>
                <div class="value">{starttime.slice(11,13)+"시 "+starttime.slice(14,16)+"분"}</div>
            </div>
            <div>
                <label>총인원</label>
                <br></br>
                <div class="value">{totalmember+"명"}</div>
            </div>
            <div>
                <label>현재 인원</label>
                <br></br>
                <div class="value">{currentmember}</div>
            </div>
            <div>
                <label>생성 날짜</label>
                <br></br>
                <div class="value">{createtime.slice(0,10)}</div>
            </div>
            <div>
                <label>생성 시간</label>
                <br></br>
                <div class="value">{createtime.slice(11,13)+"시"+createtime.slice(14,16)+"분"}</div>
            </div>
            <div>
                <label class="comment"></label>
            </div>
            <div>
                <a href="/main"><button class="list" type='button'>
                    목록
                </button></a>
                {
                    isLeader === true ?
                        <button class="modify" type='button' onClick={() => {OnClickModify(roomno)}}>수정</button>
                        : 
                        null
                }
                { 
                    isRide === true ?
                        <button class="rideNo" type='submit' onClick={OnClickRide}>내리기</button>
                        :
                        <button class="ride" type='submit' onClick={OnClickRide}>타기</button> 
                }
            </div>
        </div>
        )
    }

export default View;
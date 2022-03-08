import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleComment from './SingleComment'
import './View.css';

function ride_button_click() {
    alert('정상적으로 신청되었습니다!');
}

const View = () => {
    const [vRoomname, vStartpoint, vEndpoint, vStarttime] = useState('');
    const [vTotalmember, vCurrentmember, vReader] = useState();

    useEffect(() => {
        let obj = {
            roomnum: "01"
        };
        axios.get('https://taxipool.iptime.org:8080/api/rooms/01')
        .then(res => {
                console.log(res);
                vRoomname = res.roomname;
                vStartpoint = res.startpoint;
                vEndpoint = res.endpoint;
                vStarttime = res.starttime;
                vTotalmember = res.totalmember;
                vCurrentmember = res.currentmember;
                vReader = 1;

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
                <label class="roomname">방제 : {vRoomname}</label>
            </div>
            <div>
                <label class="roomview">
                    <div class="maintext_1">[방정보]</div>
                    <div>출 발 지 : {vStartpoint}</div>
                    <div>도 착 지 : {vEndpoint}</div>
                    <div>출발 날짜 : {vStarttime}</div>
                    <div>출발 시간 : </div>
                    <div>총 인 원 : {vTotalmember}</div>
                    <div>현재 인원 : {vCurrentmember}</div>
                </label>
            </div>
            <div>
                <label class="comment"></label>
                    
            </div>
            <div>
                <a href="/main"><button class="list" type='button'>
                    목록
                </button></a>
                <button class="ride" type='submit' onClick={ride_button_click}>
                    타기
                </button>
                <div>
                    {
                        vReader == 1
                        ? <a href="/Update"><button class="modify" type='button'>
                            수정</button></a>
                        : null
                    }
                </div>
            </div>
        </div>
        )
    }

export default View;
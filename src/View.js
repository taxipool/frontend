import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleComment from './SingleComment'
import './View.css';

function ride_button_click() {
    alert('정상적으로 신청되었습니다!');
}

const View = () => {
    const [inputs, setInputs] = useState({
        vRoomname: "",
        vStartpoint: "",
        vEndpoint: "",
        vStarttime: new Date(),
        vTotalmember: '',
        vCurrentmember: '',
        vLeader: ''
    })

    const onInputChange = (e) => {
        const { value, key } = e.target;
        setInputs({
            ...inputs,
            [key] : value
        })
    }

    useEffect(() => {
        let obj = {
            roomnum: "01"
        };

        let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im15aWQiLCJpYXQiOjE1MTYyMzkwMjJ9.SrLa4xS_VbNwYF4Zatu7ilRXCKrOlccvkBPHYV5yJSc"
    
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
         };

        axios.get(`https://taxipool.iptime.org:8080/api/rooms/${obj.roomnum}`, '', config)
        .then(res => {
                console.log(res);
                inputs.vRoomname = res.roomname;
                inputs.vStartpoint = res.startpoint;
                inputs.vEndpoint = res.endpoint;
                inputs.vStarttime = res.starttime;
                inputs.vTotalmember = res.totalmember;
                inputs.vCurrentmember = res.currentmember;
                inputs.vLeader = res.leaderid; // 닉네임

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
                <label class="roomname">방제 : {inputs.vRoomname}</label>
            </div>
            <div>
                <label class="roomview">
                    <div class="maintext_1">[방정보]</div>
                    <div>출 발 지 : {inputs.vStartpoint}</div>
                    <div>도 착 지 : {inputs.vEndpoint}</div>
                    <div>출발 날짜 : {inputs.vStarttime}</div>
                    <div>출발 시간 : </div>
                    <div>총 인 원 : {inputs.vTotalmember}</div>
                    <div>현재 인원 : {inputs.vCurrentmember}</div>
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
                        inputs.vLeader == 1
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
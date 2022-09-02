import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrafficLight.css';

function TrafficLight() {
    // const con = document.getElementById("traffic");
    // if ( window.location.pathname == '/' ) {
    //     con.style.display = 'none';
    // }
    const [isLogin, setIsLogin] = useState(false)
 
    useEffect(() => {
        if(sessionStorage.getItem('access_token') !== null){
            setIsLogin(true)
        }
    })

    function OnClickLogout() {
        sessionStorage.removeItem('access_token')
        setIsLogin(false)
        window.location.href="/"
    }

    function OnClickSignout() {
        var inputPW = prompt("비밀번호를 입력하시면 탈퇴됩니다.");
        
        let userObj = {
            pw: inputPW
         };
        
        axios.post("http://localhost:3000/api/user/member", userObj)
        .then(res => {
            if(res.status == 400) {
                alert("비밀번호가 틀렸습니다.");
            } else if(res.status == 200) {
                alert("회원탈퇴 성공")
            }
        })
    }

    return(
        <div id="traffic" class="traffic-light">
            <div class="traffic-top">
                {
                    !isLogin? 
                        <>
                            <button class="top" onClick={() => {window.location.href="/login"}}>로그인</button>
                            <button class="mid"></button>
                            <button class="bottom" onClick={() => {window.location.href="/signup"}}>회원가입</button>
                        </>
                        :
                        <>
                            <button class="top" onClick={OnClickLogout}>로그아웃</button>
                            <button class="mid" onClick={() => {window.location.href="/create"}}>글쓰기</button>
                            <button class="bottom" onClick={OnClickSignout}>회원탈퇴</button>
                        </>
                }
                
                
            </div>

            <div class="traffic-middle"></div>

            <div class="traffic-bottom"></div>
        </div>
    )
}

export default TrafficLight;
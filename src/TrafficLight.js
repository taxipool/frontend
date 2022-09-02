import React, { useState, useEffect } from 'react';
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
                            <button class="bottom">회원탈퇴</button>
                        </>
                }
                
                
            </div>

            <div class="traffic-middle"></div>

            <div class="traffic-bottom"></div>
        </div>
    )
}

export default TrafficLight;
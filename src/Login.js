import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        let obj = {
            id: "myid",
            pw: "mypw"
        };
        axios.get('http://localhost:3000/api/rooms', obj, {
            /*
            headers: {
                token: "wptinwerpoinwepoirn"
            }
            */
        })
        .then(res => {
                console.log(res);
                sessionStorage.setItem('token', res.token);
                // token = sessionStorage.getItem('token');
            }
        )
        .catch(res => console.log('sss'))
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
        <div class="login">
            <h1 class="title">LOGIN</h1>
            <hr></hr>
            <div>
                <label htmlFor='input_id'>아이디</label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>비밀번호</label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
            </div>
        </div>
    )
}

export default Login;
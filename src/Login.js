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
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
        <div class="login">
            <h2 class="title">LOGIN</h2>
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
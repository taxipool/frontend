import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
 
function Login() {
    const token = JSON.parse(sessionStorage.getItem("access_token"));
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    useEffect(() => {
    },
    []);

    const onClickLogin = () => {
        axios.post('http://taxipool.iptime.org:8080/api/user/', null, {
            params: {
            'user_id': inputId,
            'user_pw': inputPw
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            if (res.data.id === undefined){
                alert('아이디 일치 x')
            } else if (res.data.id === null){
                alert('비번 일치 x')
            } else if (res.data.id === inputId) {
                console.log('로그인 성공')
                let token = res.data.token;
                sessionStorage.setItem("access_token", token);
                console.log(token);
                sessionStorage.setItem('user_id', inputId)
            }
            if (res.status == 200) 
                window.location.href="/main";
        })
        .catch(err => {
            alert("로그인 실패!!");
            console.log(err);
        });
    }
 
    return(
        <div className="login">
            <h1 className="title">LOGIN</h1>
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
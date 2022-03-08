import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const onClickLogin = (email, password) => {
        const data = {
            email,
            password,
        };
        axios.post('http://taxipool.iptime.org:8080/api/user/', data, {
            params: {
                'user_id': inputId,
                'user_pw': inputPw,
            },
            // headers: {
            //     "Authorization" : `Bearer ${token}`
            // }
        })
        .then(res => {
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        })
        .catch(error => {
            console.log("에러")
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
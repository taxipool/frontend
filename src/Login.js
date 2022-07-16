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
            <div className='login-container'>
                <h1 className="title">LOGIN</h1>
                <div>
                    <input placeholder='아이디' type='text' name='input_id' value={inputId} onChange={handleInputId} />
                </div>
                <div>
                    <input placeholder='비밀번호' type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </div>
                <div className='stay-login'>
                    <p><i class="xi-check-circle-o"></i> 로그인 상태 유지</p>
                </div>
                <div>
                    <button type='button' onClick={onClickLogin}>로그인</button>
                </div>
            </div>
            
            <div>
                <p><a>비밀번호 찾기</a> | <a>아이디 찾기</a> | <a>회원가입</a></p>
            </div>
        </div>
        
    )
}

export default Login;
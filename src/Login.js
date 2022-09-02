import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
 
function Login() {
    // 통신
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
 
    useEffect(() => {
    },
    []);

    const onClickLogin = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()

        let userObj = {
            id: id,
            password: password,
         };
        // axios.post("http://kittaxipool.iptime.org:3000/api/user/session", userObj)
        axios.post("http://localhost:3000/api/user/session", userObj)
        .then(res => {
            // 아이디 또는 비번 일치 x
            if (res.status === 400){
                console.log('로그인 실패');
                alert('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
            }
            // 로그인 성공
            else if (res.status === 200) {
                sessionStorage.setItem("access_token", res.data.token);
                window.location.href="/main"; // href
            }
        })
        .catch(err => {
            alert("네트워크가 불안정합니다.");
            console.log(err);
        });
    }
 
    // 디자인
    return(
        <div className="login">
            <div className='login-container'>
                <h1 className="title">LOGIN</h1>
                <div>
                    <input placeholder='아이디' type='text' name='id' value={id} onChange={onIdHandler} />
                </div>
                <div>
                    <input placeholder='비밀번호' type='password' name='password' value={password} onChange={onPasswordHandler} />
                </div>
                <div>
                    <button type='button' onClick={onClickLogin}>로그인</button>
                </div>
            </div>
        </div>
        
    )
}

export default Login;
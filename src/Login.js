import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
 
function Login() {
    // 통신
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
        // post
        axios.post('http://kittaxipool.iptime.org:3000/api/user/', null, {
            params: {
            'user_id': inputId,
            'user_pw': inputPw
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then(res => {
            // 아이디 또는 비번 일치 x
            if (res.status === 400){
                console.log('로그인 실패')
                alert('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.')
                // href
                window.location.href="/main";
            }
            // 로그인 성공
            else if (res.status === 200) {
                console.log(token, '로그인 성공')
                let token = res.data.token;
                sessionStorage.setItem("access_token", token);
                sessionStorage.setItem('user_id', inputId)
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
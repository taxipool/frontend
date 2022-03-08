import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
 
function Signup() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    const onClickSignup = () => {
        axios.post('http://taxipool.iptime.org:8080/api/rooms/', null, {
            params: {
            'user_id': inputId,
            'user_pw': inputPw
            }
        })
        .then(res => console.log(res))
        .catch()
    }
 
    useEffect(() => {
        axios.get('http://taxipool.iptime.org:8080/api/rooms/')
        .then(res => console.log(res))
        .catch(res => console.log('통신 실패!!'))
    },
    [])
 
    return(
        <div class="signup">
            <h2 class="title">SIGNUP</h2>
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
                <label htmlFor='input_nickname'>닉네임</label>
                <input type='text' name='input_nickname' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <label htmlFor='input_name'>이름</label>
                <input type='text' name='input_name' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <label htmlFor='input_num'>전화번호</label>
                <input type='text' name='input_num' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickSignup}>회원가입</button>
            </div>
        </div>
    )
}
 
export default Signup;
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
 
    const onClickLogin = () => {
        console.log('click signup')
    }
 
    useEffect(() => {
        let obj = {
            id: "myid",
            pw: "mypw",
            name: "myname",
            phonenum: "myphonenum",
            nickname: "mynickname"
        };
        axios.get('/user_inform/signup', obj)
        .then(res => console.log(res))
        .catch(res => console.log('sss'))
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
                <button type='button' onClick={onClickLogin}>회원가입</button>
            </div>
        </div>
    )
}
 
export default Signup;
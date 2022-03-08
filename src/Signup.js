import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
 
function Signup() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputNicname, setInputNicname] = useState('');
    const [inputNum, setInputNum] = useState('');
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputName = (e) => {
        setInputName(e.target.value)
    }
    const handleInputNicname = (e) => {
        setInputNicname(e.target.value)
    }
    const handleInputNum = (e) => {
        setInputNum(e.target.value)
    }
 
    const onClickSignup = () => {
        axios.post('http://taxipool.iptime.org:8080/api/rooms/', null, {
            params: {
            'user_id': inputId,
            'user_pw': inputPw
            }
        })
        .then(res => {
            console.log(res);
            window.location.href="/login";
        })
        .catch(err => {
            alert("회원가입 실패!!");
            console.log(err);
        });
    }
 
    useEffect(() => {
        axios.post('http://taxipool.iptime.org:8080/api/user/')
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
                <input placeholder="abcde" maxLength="10" class="check_input" type='text' name='input_id' value={inputId} onChange={handleInputId} />
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='input_pw'>비밀번호</label>
                <input placeholder="********" maxLength="20" type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <label htmlFor='input_nickname'>닉네임</label>
                <input maxLength="6" placeholder="택시풀" class="check_input" type='text' value={inputNicname} onChange={handleInputNicname} />
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='input_name'>이름</label>
                <input placeholder="홍길동" type='text' value={inputName} onChange={handleInputName} />
            </div>
            <div>
                <label htmlFor='input_num'>전화번호</label>
                <input placeholder="010-0000-0000" type='text' value={inputNum} onChange={handleInputNum} />
            </div>
            <div>
                <button class="singup_button" type='button' onClick={onClickSignup}>회원가입</button>
            </div>
        </div>
    )
}
 
export default Signup;
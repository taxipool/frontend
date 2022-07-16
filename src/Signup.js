import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
 
function Signup() {
    // 통신
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [nickname, setNickname] = useState('');

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPhonenumberHandler = (event) => {
        setPhonenumber(event.currentTarget.value)
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value)
    }
 
    useEffect(() => {
    },
    []);
 
    const onClickSignup = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        let userObj = {
            id: id,
            password: password,
            name: name,
            phonenumber: phonenumber,
            nickname: nickname
         };
         axios.post("http://kittaxipool.iptime.org:3000/api/user/member", userObj)
        .then(res => {
            // 회원가입 실패
            if (res.status === 400){
                console.log('회원가입 실패')
                alert('회원가입을 실패했습니다. 입력하신 내용을 다시 확인해주세요.')
            }
            // 회원가입 성공
            else if (res.status === 200) {
                console.log('회원가입 성공')
                // href
                window.location.href="/login";
            }
            console.log(res);
            window.location.href="/login";
        })
        .catch(err => {
            alert("네트워크가 불안정합니다.");
            console.log(err);
        });
    }
 
    // 디자인
    return(
        <div class="signup">
            <h2 class="title">SIGNUP</h2>
            <hr></hr>
            <div>
                <label htmlFor='id'>아이디</label>
                <input placeholder="abcde" maxLength="10" class="check_input" type='text' name='id' value={id} onChange={onIdHandler} />
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='password'>비밀번호</label>
                <input placeholder="********" maxLength="20" type='password' name='password' value={password} onChange={onPasswordHandler} />
            </div>
            <div>
                <label htmlFor='name'>이름</label>
                <input maxLength="6" placeholder="홍길동" class="check_input" type='text' name='name' value={name} onChange={onNameHandler} />
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='phonenumber'>전화번호</label>
                <input placeholder="010-0000-0000" type='text' name='phonenumber' value={phonenumber} onChange={onPhonenumberHandler} />
            </div>
            <div>
                <label htmlFor='nickname'>닉네임</label>
                <input placeholder="택시풀" type='text' name='nickname' value={nickname} onChange={onNicknameHandler} />
            </div>
            <div>
                <button class="singup_button" type='button' onClick={onClickSignup}>회원가입</button>
            </div>
        </div>
    )
}
 
export default Signup;
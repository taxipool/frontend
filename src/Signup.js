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

    let checkID = false;
    let checkNickname = false;
 
    useEffect(() => {
    },
    []);
 
    const onClickIDCheck = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        
        axios.get("http://localhost:3000/api/user/member?id="+id)
        .then(res => {
            if (res.status === 200) {
                alert('사용 가능한 아이디입니다.')
                checkID = true;
            }
            console.log(res);
        })
        .catch(err => {
            alert("중복된 아이디입니다.");
            console.log(err);
        });
    }
 
    const onClickNicknameCheck = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()

        axios.get("http://localhost:3000/api/user/member?nickname="+nickname)
        .then(res => {
            if (res.status === 200){
                alert("사용 가능한 닉네임입니다.")
            }
            console.log(res);
        })
        .catch(err => {
            alert("중복된 닉네임입니다.");
            console.log(err);
        });
    }
 
    const onClickSignup = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        
        let userObj = {
            id: id,
            pw: password,
            name: name,
            phone: phonenumber,
            nickname: nickname
         };

         if(checkID==true && checkNickname==true) {
            if(id && password && name && phonenumber && nickname) {   
                // axios.post("http://kittaxipool.iptime.org:3000/api/user/member", userObj)
                axios.post("http://localhost:3000/api/user/member", userObj)
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
                })
                .catch(err => {
                    alert("네트워크가 불안정합니다.");
                    console.log(err);
                });
            } else {
                alert("칸을 모두 입력해주세요.")
            }
         } else if(checkID == false) {
            alert("아이디 중복 체크를 해주세요.")
         } else {
            alert("닉네임 중복 체크를 해주세요.")
         }
    }
 
    // 디자인
    return(
        <div class="signup">
            <div className='signup-container'>
                <h1 class="title">SIGNUP</h1>
                <div>
                    <input placeholder="아이디" maxLength="10" class="check_input" type='text' name='id' value={id} onChange={onIdHandler} />
                    <button class="btn" onClick={onClickIDCheck}>중복 확인</button>
                </div>
                <div>
                    <input placeholder="비밀번호" maxLength="20" type='password' name='password' value={password} onChange={onPasswordHandler} />
                </div>
                <div>
                    <input maxLength="6" placeholder="이름" type='text' name='name' value={name} onChange={onNameHandler} />
                </div>
                <div>
                    <input placeholder="전화번호" type='text' name='phonenumber' value={phonenumber} onChange={onPhonenumberHandler} />
                </div>
                <div>
                    <input class="check_input" placeholder="닉네임" type='text' name='nickname' value={nickname} onChange={onNicknameHandler} />
                    <button class="btn" onClick={onClickNicknameCheck}>중복 확인</button>
                </div>
                <div>
                    <button class="signup_button" type='button' onClick={onClickSignup}>회원가입</button>
                </div>
            </div>
        </div>
    )
}
 
export default Signup;
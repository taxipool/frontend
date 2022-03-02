import React from 'react';
import SingleComment from './SingleComment'
import './View.css';

class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [
                {
                    uuid:1,
                    writer:"김코딩",
                    date: "2020-10-10",
                    content: "안녕 리액트"
                },
                {
                    uuid:2,
                    writer:"박해커",
                    date: "2020-10-12",
                    content: "좋아 코드스테이츠!"
                }
            ]
        }
        this.addComent = this.addComent.bind(this);
    }
    addComent(){
        let value = document.querySelector('#new-comment-content').value;
        this.setState({comments: [...this.state.tweets, {
            uuid: this.state.comments.length + 1,
            writer: '김코딩',
            date: new Date().toISOString().slice(0, 10),
            content:value
        }]})
    }
    render(){
        return(
            <div class="view">
                <h2 class="title">ROOM</h2>
                <hr></hr>
                <div>
                    <label class="roomname">방제 : </label>
                </div>
                <div>
                    <label class="roomview">
                        <div class="maintext_1">[방정보]</div>
                        <div>출 발 지 :</div>
                        <div>도 착 지 :</div>
                        <div>출발 날짜 : </div>
                        <div>출발 시간 : </div>
                        <div>총 인 원 : </div>
                        <div>현재 인원 : </div>
                    </label>
                </div>
                <div>
                    <label class="comment"></label>
                    
                </div>
                <div>
                    <a href="/main"><button class="list" type='button'>
                        목록
                    </button></a>
                    <button class="ride" type='submit'>
                        타기
                    </button>
                </div>
                <div id="root">
                    <div>
                        <div>작성자 : 김코딩</div>
                        <div id="writing-area">
                            <textarea id="new-comment-content"></textarea>
                            <button id="submit-new-comment" onClick={this.addComment}>새 글 쓰기</button>
                        </div>
                        <ul id="comments">
                            {
                                this.state.comments.map(comment => {
                                    return <SingleComment key={comment.uuid} comment={comment}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}    
export default View;
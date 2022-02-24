import './View.css';
 
function View() {
    return(
        <div class="view">
            <h2 class="title">ROOM</h2>
            <hr></hr>
            <div>
                <label class="roomname" htmlFor='input_roomname'>방제</label>
            </div>
            <div>
                <label class="roomview" htmlFor='input_startpoint'>출 발 지 : <br></br>도 착 지 : <br></br>
                출발 날짜 : <br></br>출발 시간 : <br></br>총 인 원 : <br></br>현재 인원 : </label>
            </div>
            <div>
                <label class="comment" htmlFor='input_startdate'>댓글</label>
            </div>
            <div>
                <button class="list" type='button'>
                    목록
                </button>
                <button class="ride" type='submit'>
                    타기
                </button>
            </div>
        </div>
    )
}

export default View;
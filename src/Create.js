import './Create.css';
 
function Create() {
    return(
        <div class="create">
            <h2 class="title">CREATE</h2>
            <hr></hr>
            <div class="top">
                <label class="roomname" htmlFor='input_roomname'>방제</label>
                <input type='text' name='input_roomname'/>
                <label class="totalmember" htmlFor='input_totalmember'>인원</label>
                <input type='number' name='input_totalmember'/>
            </div>
            <div class="center">
                <div>
                    <label class="startpoint"htmlFor='input_startpoint'>출발지</label>
                    <input type='text' name='input_startpoint'/>
                    <label class="endpoint" htmlFor='input_endpoint'>도착지</label>
                    <input type='text' name='input_endpoint'/>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <input type='number' name='input_startdate'/>
                    <input type='number' name='input_startdate'/>
                    <label class="starttime" htmlFor='input_starttime'>출발 시간</label>
                    <input type='number' name='input_starttime'/>
                    <input type='number' name='input_starttime'/>
                </div>
            </div>
            <div class="creatBtn">
                <button class="cancel" type='button'>
                    취소
                </button>
                <button class="complete" type='submit'>
                    완료
                </button>
            </div>
        </div>
    )
}

export default Create;
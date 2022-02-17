import './Update.css';
 
function Update() {
    return(
        <div class="Update">
            <h2 class="title">UPDATE</h2>
            <hr></hr>
            <div class="top">
                <div class="top_1">
                    <label class="roomname" htmlFor='input_roomname'>방제</label>
                    <label class="totalmember" htmlFor='input_totalmember'>인원</label>
                </div>
                <div class="top_2">
                    <input class="roomname_i" type='text' name='input_roomname'/>
                    <input class="totalmember_i" type='number' name='input_totalmember'/>
                </div>
            </div>
            <div class="center">
                <div class="center_1">
                    <label class="startpoint"htmlFor='input_startpoint'>출발지</label>
                    <label class="endpoint" htmlFor='input_endpoint'>도착지</label>
                </div>
                <div class="center_2">
                    <input type='text' name='input_startpoint'/>
                    <input type='text' name='input_endpoint'/>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom_1">
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <label class="starttime" htmlFor='input_starttime'>출발 시간</label>
                </div>
                <div class="bottom_2">
                    <input type='number' name='input_startdate'/>
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

export default Update;
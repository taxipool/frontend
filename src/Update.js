import './Update.css';
 
function Update() {
    return(
        <div class="update">
            <h2 class="title">UPDATE</h2>
            <hr></hr>
            <div>
                <div>
                    <label class="roomname" htmlFor='input_roomname'>방제</label>
                    <label class="totalmember" htmlFor='input_totalmember'>인원</label>
                </div>
                <div>
                    <input class="roomname_i" type='text' name='input_roomname' placeholder="방제를 작성해주세요"/>
                    <input class="totalmember_i" type='number' min="1" max="3" name='input_totalmember' placeholder="모집인원"/>
                </div>
            </div>
            <div>
                <div>
                    <label class="startpoint" htmlFor='input_startpoint'>출발지</label>
                    <label class="endpoint" htmlFor='input_endpoint'>도착지</label>
                </div>
                <div>
                    <input class="startpoint_i" type='text' name='input_startpoint' placeholder="자세히 작성해주세요"/>
                    <input class="endpoint_i" type='text' name='input_endpoint' placeholder="자세히 작성해주세요"/>
                </div>
            </div>
            <div>
                <div>
                    <label class="startdate" htmlFor='input_startdate'>출발 날짜</label>
                    <label class="starttime" htmlFor='input_starttime'>출발 시간</label>
                </div>
                <div>
                    <input class="startdate_ia" type='number' min="1" max="12" name='input_startdate' placeholder="월"/>
                    <input class="startdate_ib" type='number' min="1" max="31" name='input_startdate' placeholder="일"/>
                    <input class="starttime_ia" type='number' min="1" max="24" name='input_starttime' placeholder="시"/>
                    <input class="starttime_ib" type='number' min="0" max="59" name='input_starttime' placeholder="분"/>
                </div>
            </div>
            <div>
                <a href="/view"><button class="cancel" type='button'>
                    취소
                </button></a>
                <a href="/view"><button class="complete" type='submit'>
                    완료
                </button></a>
            </div>
        </div>
    )
}

export default Update;
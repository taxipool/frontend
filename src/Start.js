import './Start.css';

function Start() {
    return(
        <div class="start">
            <div class="startBtn">
                <a href="/login">
                    <button class="start-login">
                        로그인
                    </button>
                </a>
                <a href="/singup">
                    <button class="start-signup">
                        회원가입
                    </button>
                </a>
            </div>
        </div>
    )
}
 
export default Start;
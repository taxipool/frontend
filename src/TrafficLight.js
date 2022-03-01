import './TrafficLight.css';
 
function TrafficLight() {
    return(
        <div class="traffic-light">
            <div class="top">
                <a href="/login"><button class="login">로그인</button></a>
                <button class="mid"></button>
                <a href="/signup"><button class="signup">회원가입</button></a>
            </div>

            <div class="middle"></div>

            <div class="bottom"></div>
        </div>
    )
}

export default TrafficLight;
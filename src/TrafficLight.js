import './TrafficLight.css';
 
function TrafficLight() {
    return(
        <div class="traffic-light">
            <div class="top">
                <button class="login">로그인</button>
                <button class="mid"></button>
                <button class="signup">회원가입</button>
            </div>

            <div class="middle"></div>

            <div class="bottom"></div>
        </div>
    )
}

export default TrafficLight;
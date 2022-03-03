import './TrafficLight.css';
import react, { Component } from 'react';

class TrafficLight extends Component {
    render() {
        return(
            <div class="traffic-light">
                <div class="traffic-top">
                    <a href="/login"><button class="top">로그인</button></a>
                    <button class="mid"></button>
                    <a href="/signup"><button class="bottom">회원가입</button></a>
                </div>
    
                <div class="traffic-middle"></div>
    
                <div class="traffic-bottom"></div>
            </div>
        )
    }
}

export default TrafficLight;
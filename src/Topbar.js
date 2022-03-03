import './Topbar.css';
import logo from './logo.png';
 
function Topbar() {
    return(
        <div>
            <div class="header">
                <img class="logo" src={logo}></img>
                <a href="/">
                    <h2 class="title">TAXIPOOL</h2>
                </a>
                <div class="line-wrap">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    )
}
 
export default Topbar;
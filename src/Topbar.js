import './Topbar.css';
import logo from './logo.png';
 
export function Topbar() {
    // 헤더 애니메이션
    var prevScrollpos = window.pageYOffset;
    console.log("first Y offset : "+prevScrollpos)
    window.onscroll =headerbarToggle
    function headerbarToggle() {
        var headerbar = document.getElementById("headerbar");
        
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            headerbar.style.opacity = 0.1;  
        } else {        
            headerbar.style.opacity = 1;   
        }
    }

    return(
        <header id="headerbar" class="header nav-down">
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
        </header>
    )
}
 
export default Topbar;
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
            headerbar.style.opacity = 0;  
        } else {        
            headerbar.style.opacity = 1;   
        }
    }

    return(
        <header id="headerbar" className="header nav-down">
            <img className="logo" src={logo}></img>
            <a href="/">
                <h2 className="title">TAXIPOOL</h2>
            </a>
            <div className="line-wrap">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    )
}
 
export default Topbar;
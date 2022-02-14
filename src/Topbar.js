import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Topbar.css';
 
function Topbar() {
    return(
        <div>
            <div class="header">
                <img src="../images/logo.svg"/>
                <h2>TAXIPOOL</h2>
            </div>
        </div>
    )
}
 
export default Topbar;
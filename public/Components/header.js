import React, { useState } from 'react'
import Headstyles from '../../public/Css/header.module.css'
import Ostyles from '../../public/Css/overlay.module.css'

const Header = () => {
    const [showMenu, setshowMenu] = useState(false)

    const login = () => {
        // Place your login function code here
        // For example, you can call the login function from your original code
        // timestamp = Date.now().toString();
        // ... rest of the login function

        alert('log in process....')
    }

    return (
        <div className={Headstyles.header}>
            <nav>
                <div className={Headstyles.logo}>AutoCore</div>

                <button className={Headstyles.hamburger} onClick={() => setshowMenu(true)}>
                    &#9776;
                </button>

                <div className={Ostyles.overlay} style={{ width: showMenu ? '100%' : '0' }}>
                    <a href="javascript:void(0)" className={Ostyles.closebtn} onClick={() => setshowMenu(false)}>
                        &times;
                    </a>

                    <div className={Ostyles.overlayContent}>
                        <a href="/">Home</a>
                        <a href="statistics">Statistics</a>
                        <a href="calculation">Calculation</a>
                        <a href="farms">Farms</a>
                        <a href="subscribe">Subscribe</a>
                    </div>
                </div>

                <div className={Headstyles.links}>
                    <a href="/">Home</a>
                    <a href="statistics">Statistics</a>
                    <a href="calculation">Calculation</a>
                    <a href="farms">Farms</a>
                    <a href="subscribe">Subscribe</a>
                </div>

                <div className={Headstyles.login}>
                    <button onClick={login}>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header

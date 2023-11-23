'use client'
import React, { useState } from 'react'
import style from '../../public/styles/header.module.css'

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
        <div className={style.header}>
            <nav>
                <div className={style.logo}>AutoCore</div>

                <button className={style.hamburger} onClick={() => setshowMenu(true)}>
                    &#9776;
                </button>

                <div className={style.overlay} style={{ width: showMenu ? '100%' : '0' }}>
                    <a href="javascript:void(0)" className={style.closebtn} onClick={() => setshowMenu(false)}>
                        &times;
                    </a>

                    <div className={style.overlayContent}>
                        <a href="/">Home</a>
                        <a href="statistics">Statistics</a>
                        <a href="farms">Farms</a>
                        <a href="subscribe">Subscribe</a>
                    </div>
                </div>

                <div className={style.links}>
                    <a href="/">Home</a>
                    <a href="statistics">Statistics</a>
                    <a href="farms">Farms</a>
                    <a href="subscribe">Subscribe</a>
                </div>

                <div className={style.login}>
                    <button onClick={login}>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header

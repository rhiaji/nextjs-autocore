import style from '../../public/styles/home.module.css'

const homeContent = () => {
    return (
        <div className={style.main}>
            <div className={style.card}>
                <div className={style.cardHeader}>
                    <h3>Time remaining for next claim</h3>
                    <span id="countdown"></span>
                </div>
                <div className={style.welcome}>
                    <h2>Welcome to AutoCore</h2>
                    <br></br>
                    <p>Your ultimate destination for Terracore Game Bot Services.</p>
                    <p>
                        Elevating your gaming experience with a diverse range of services tailored to your needs. Whether you seek automation,
                        optimization, or a competitive edge, AutoCore is here to provide personalized solutions.
                    </p>
                    <p>Feel free to explore the official Terracore Game and become a part of our vibrant community on the</p>
                    <br />
                    <p>
                        <a className={style.welcomeLink} href="https://www.terracoregame.com/" target="_blank">
                            Official Terracore Game website
                        </a>
                        <br></br>
                        <br></br>
                        <a className={style.welcomeLink} href="https://discord.gg/7fGrsr3ZBx/" target="_blank">
                            Official Discord
                        </a>
                    </p>
                    <br></br>
                    <p>
                        Crafted with dedication by
                        <a className={style.welcomeLink} href="https://peakd.com/@rhiaji" target="_blank">
                            {' '}
                            Rhiaji
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default homeContent

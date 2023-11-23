import style from '../../public/styles/farms.module.css'

const FarmsContent = () => {
    return (
        <div className={style.main}>
            <div className={style.accounts}>
                <section>
                    <p>Your Accounts</p>
                </section>
                <section>
                    <button>+</button>
                    <p>Add account</p>
                </section>
                <section></section>
            </div>
            <div className={style.content}></div>
        </div>
    )
}

export default FarmsContent

import React from 'react'
import Farms from '../Css/farms.module.css'

const FarmsContent = () => {
    const addAccount = () => {
        const accountInput = document.getElementById('account')
        const accountName = accountInput.value.trim() // Trim whitespace

        if (accountName === '') {
            alert('Please enter an account name.')
            return
        }

        hive_keychain.requestSignBuffer(accountName.toLowerCase(), `${accountName} account add`, 'Posting', (response) => {
            if (response.success) {
                // Create a button element for the account
                const accountButton = document.createElement('button')
                accountButton.className = 'btn_account'
                accountButton.textContent = accountName

                // Append the button to the account list
                const accountList = document.getElementById('card-accounts')
                accountList.appendChild(accountButton)

                // Save the accounts to local storage
                const accounts = getStoredAccounts()
                accounts.push(accountName)
                localStorage.setItem('accounts', JSON.stringify(accounts))

                // Clear the input field
                accountInput.value = ''
                window.location.reload()
            } else {
                console.error(response.message)
                alert('Account not valid!')
            }
        })
    }
    return (
        <div className={Farms.main}>
            <div className={Farms.card}>
                <div className={Farms.cardHeader}>
                    <h3>Farms</h3>
                </div>

                <div className={Farms.cardAccounts} id="card-accounts"></div>

                <div className={Farms.cardFooter}>
                    <label for="account">Hive Username:</label>
                    <input type="text" id="account" name="account" required />
                    <button type="button" onClick={addAccount}>
                        Add account
                    </button>
                </div>
            </div>

            <div className={Farms.card}>
                <div className={Farms.cardHeader} id="farm">
                    <h3>Pick a Farm</h3>
                </div>

                <div className={Farms.cardStats}>
                    <div className={Farms.cardStatsBox}>
                        <div className={Farms.cardText}>MINE RATE</div>
                        <div className={Farms.cardText} id="minerate">
                            12
                        </div>
                    </div>

                    <div className={Farms.cardStatsBox}>
                        <div className={Farms.cardText}>STASH</div>
                        <div className={Farms.cardText} id="stash">
                            12
                        </div>
                    </div>

                    <div className={Farms.cardStatsBox}>
                        <div className={Farms.cardText}>STATUS</div>
                        <div className={Farms.cardText}>Active</div>
                    </div>

                    <div className={Farms.cardStatsBox}>
                        <div class="centered-btn">
                            <button class="btn" type="button" onclick="sbt_btn()">
                                Activate
                            </button>
                        </div>
                    </div>
                </div>

                <div className={Farms.cardFooter}>
                    <label for="posting">Posting Key:</label>
                    <input type="text" id="posting" name="posting" required />
                    <button type="button" id="updateKeysButton" onclick="updateKey()">
                        Update key
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FarmsContent

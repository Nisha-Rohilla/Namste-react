import { useState } from 'react';

export const Header = () => {
    const [changeBtn, setChangeBtn] = useState('Login')

    const btnChange = () => {
        changeBtn === "Login" ? setChangeBtn("Logout") : setChangeBtn('Login')
    }
    return (
        <div className="header">
            <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" alt="" className="imgLogo" />

            <div className="list">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Feedback</li>
                    <button onClick={btnChange}>{changeBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
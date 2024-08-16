import "./styles.css"
import { useState } from 'react'

import logo from "../../imgs/logo.png"

function Navbar() {

    const [selectedItem, setSelectedItem] = useState();

    function handleClick(event){
        setSelectedItem(event.target.innerText)
    }

    return(
        <div className="navBarMain">
            <img src={logo} alt="logo"/>
            <ul className="list">
                <li className={`listItem ${selectedItem === 'Fretes disponíveis' ? 'selected' : ''}`} 
                    onClick={handleClick}>Fretes disponíveis</li>
                <li className={`listItem ${selectedItem === 'Meus fretes' ? 'selected' : ''}`}
                     onClick={handleClick}>Meus fretes</li>
                <li className={`listItem ${selectedItem === 'Meu perfil' ? 'selected' : ''}`}
                 onClick={handleClick}>Meu perfil</li>
            </ul>
        </div>
    )
}

export default Navbar;
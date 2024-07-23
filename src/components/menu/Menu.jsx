import React, { useState } from "react";

import './Menu.css'

export default props => {

    const [alt, setAlt] = useState(0)
    const [lag, setLag] = useState(0)

    const altM = alt / 1000
    const lagM = lag / 1000

    const calcM2 = altM * lagM
    const m2 = calcM2.toFixed(2)

    console.log('Metro quadrado', m2)
    return (
        <div className="Menu" style={{ backgroundColor: "#FFFFFF" }}>
            <img src="https://lirp.cdn-website.com/3ecce3fb/dms3rep/multi/opt/Logo+Madegreen-363w.png" className="imgLogoMenu" alt="logo" />
            <div className="grid">
                <h2>Calcular Peça</h2>
                <label class="input">
                    <input class="input input1" type="number"
                        placeholder="Altura em Milímetro" pattern="[0-9]+$"
                        onChange={(event) => {
                            setAlt(event.target.value)
                        }} />
                    <input class="input" type="number"
                        placeholder="Largura em Milímetro" pattern="[0-9]+$"
                        onChange={(event) => {
                            setLag(event.target.value)
                        }} />
                </label>
                {/* /%20 */}
                <div>
                    <a href={`https://wa.me/553132703000?text=Ola%2C%20gosataria%20de%20saber%20o%20pre%C3%A7o%20de%20uma%20pe%C3%A7a%20de%20${lag}mm%20por%20${alt}mm%2C%20cerca%20de%20${m2}%20m%C2%B2`}>
                        <button class="button" role="button" >Ver Preço</button>
                    </a>
                </div>
            </div>
            <p className="footer">Desenvolvido por<a href="https://github.com/santiagoidu"><br /> Marco Tulio C. Santiago</a></p>
        </div>
    )
}
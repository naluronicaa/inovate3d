import React from "react";
import './header.css'

function Header () {
    return(
        <header className="header">
            <div className="header-top">
                <div className="header-top-l">
                    <img src="/imagens/logo_zap.png" alt="logo_zap"/> 
                    <p>(11) 95245-2105</p>
                </div>
               <img className="logo" src="/imagens/logo.png"/>
               <div className="header-top-r">
                    <div className="carrinho">
                        <img src="/imagens/icone_bag.png"/>
                        <h3>0</h3>
                    </div>
                    <p>R$ 0,00</p>
               </div>
            </div>
            <div className="header-bottom">

            </div>
        </header>
    );
}

export default Header
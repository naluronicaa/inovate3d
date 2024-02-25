import React from "react";
import "./headertop.css"

function HeaderTop () {
    return(
        <div className="header-top">
                <div className="header-top-l">
                    <img src="/imagens/logo_zap.png" alt="logo_zap"/> 
                    <p>(11) 95245-2105</p>
                </div>
               <img className="logo" src="/imagens/logo.png"/>
               <div className="header-top-r">
                    <div className="carrinho">
                        <img src="/imagens/icone_bag.png"/>
                        <h3>8</h3>
                    </div>
                    <p>R$ 0,00</p>
               </div>
            </div>
    );
}

export default HeaderTop
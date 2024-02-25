import React from "react";
import './bimage.css'

function BodyImage () {
    return(
        <body className="home">
             <img className="fundo" src='./imagens/fundo.png'/>
             <a>
             <button className="botaop" href="#">Compre Agora!</button>
            </a>
        </body>
    );
}

export default BodyImage
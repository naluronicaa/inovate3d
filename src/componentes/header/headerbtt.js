import React from "react";
import './headerbtt.css';

const textoMenu = ["Home", "Sobre Nós", "Produtos", "Carrinho", "Onde Comprar ▾", "Contato"]


function Headerbtt () {
    return (
        <div className="header-bottom">
            <div className="linha-branca"></div>
            <ul className="opcoes">
                {textoMenu.map((texto) => (
                    <li className="opcao"><a href="#">{texto}</a></li>
                ) )}                   
            </ul>
        </div>  
    );  
}

export default Headerbtt
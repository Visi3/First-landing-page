import Logo from "../assets/images/Logo.png";
import "../styles/header.css";
import "../styles/utility.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import "../styles/hero.css";
import Button from "../component/Button";
import Home from "./Home";


import { useEffect, useState } from "react";


export default function header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement;

        if (showMobileMenu) {
            htmlElement.style.overflowY = 'hidden';
        } else {
            htmlElement.style.overflowY = 'auto';
        }
        return () => {
            htmlElement.style.overflowY = 'auto';
        };
        
    }, [showMobileMenu])


    return (
        <>
            <header id="initial" className="container py-sm">
            <nav className="flex items-center justify-between">
                    <img className="logo" src={Logo} alt="Logo DonaFrost" width={125} height={80} />
                    <div className="desktop-only">
                    <ul className="flex gap-1">
                       
                        <li>
                            <a href="#initial">Início</a>
                        </li>
                        <li>
                            <a href="#photos">Fotos</a>
                        </li>
                        <li>
                            <a href="#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div> 

                <div className="desktop-only">
                    <div className="flex items-center">
                        <a className="reverse-color ml-lg" href="">Login</a>
                        <Button text="Cadastre-se"/>
                    </div>
                </div>

                <div className="mobile-menu">
                    {showMobileMenu ?
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    
                                    <li>
                                        <a href="#photos">Home</a>
                                    </li>
                                    <li>
                                        <a href="#photos">Fotos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Sobre</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                    <li>
                                        <a className="reverse-color" href="#">Login</a>
                                    </li>
                                </ul>
                                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                </span>
                            </div>
                        </div>
                        :
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    }
                </div>
            </nav>
            </header>
            
            <Home/>
        </>
    )
}
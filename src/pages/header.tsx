import Logo from "../assets/Logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import "../styles/hero.css";
import Button from "../component/Button";
import Home from "./Home";


import { useState } from "react";


export default function header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
            <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                    <ul className="flex gap-1">
                       
                        <li>
                            <a href="#solution">Home</a>
                        </li>
                        <li>
                            <a href="#testimonials">Fotos</a>
                        </li>
                        <li>
                            <a href="#pricing">Sobre</a>
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
                                        <a href="#solution">Home</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Fotos</a>
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
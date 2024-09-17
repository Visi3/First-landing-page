import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Circle1 from "../assets/circle1.svg";


import Debutante from "../assets/images/Debutante.jpg";
import Menina from "../assets/images/Menina.jpg";
import Casamento from "../assets/images/Casamento.jpg";
import Gravida from "../assets/images/Gravida.jpg";
import Perto from "../assets/images/Perto.jpg";
import Preto from "../assets/images/Preto.jpg";
import Cavalo from "../assets/images/Cavalo.jpg";
import Ruiva from "../assets/images/Ruiva.jpg";
import Fotografa from "../assets/images/Fotografa.jpg"

import Button from "../component/Button";
import '../styles/hero.css'
import '../styles/photos.css'
import '../styles/about.css'


export default function Home() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <hr/>
                    <h1>Capturando Momentos Inesquecíveis</h1>
                    <h1> Uma Foto de Cada Vez</h1>
                    <p>Transforme suas memórias em arte com fotografias que contam histórias.</p>
                    
                    <div className="flex gap-1">
                        <span><Button text="Contato"  /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                        
                    </div>
                </div>
            </section>

            <section id="photos">
                <span className="desktop-photos">
                    <img src={Circle1} alt="Circulo maior"/>
                </span>

                <h2>Minhas Fotografias</h2>

                <div className="conteudo">
                        <img src={Debutante} alt="Foto de debutante"/>
                        <img src={Cavalo} alt="Foto de uma grávida com um cavalo"/>
                        <img src={Menina} alt="Foto de uma menina no campo"/>
                        <img src={Casamento} alt="Foto de um casamento"/>
                        <img src={Perto} alt="Foto de uma debudante de perto"/>
                        <img src={Gravida} alt="Foto de uma grávida"/>
                        <img src={Preto} alt="Foto preto e branco"/>
                        <img src={Ruiva} alt="Foto de uma menina ruiva"/>
                </div>

            </section>

            <section id="about">
                <h2>Sobre</h2>

                <span className="desktop-about">
                    <img src={Circle1} alt="Circulo maior"/>
                </span>

                <div className="texto-e-imagem">

                    <div className="texto">
                        <h3>Olá, eu sou a Angela!</h3>
                        <p>Apaixonada por capturar momentos especiais, transformo cada cena em uma história única. Com um olhar sensível e criativo, registro desde retratos íntimos até grandes celebrações, buscando sempre revelar a essência de cada pessoa e ocasião. Meu trabalho é focado em criar memórias atemporais, trazendo beleza e autenticidade em cada clique. Seja para um ensaio pessoal, um casamento, ou uma sessão ao ar livre, estou pronta para eternizar seus melhores momentos com arte e emoção.</p>
                    </div>

                    <div className="fotografa">
                        <img src={Fotografa} alt="Foto da fotografa" />
                    </div>

                </div>

            </section>
        </>
    )
}
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

import Debutante from "../assets/images/Debutante.jpg";
import Menina from "../assets/images/Menina.jpg";
import Casamento from "../assets/images/Casamento.jpg";
import Gravida from "../assets/images/Gravida.jpg";
import Perto from "../assets/images/Perto.jpg";
import Preto from "../assets/images/Preto.jpg";
import Cavalo from "../assets/images/Cavalo.jpg";
import Ruiva from "../assets/images/Ruiva.jpg";

import Button from "../component/Button";
import '../styles/hero.css'
import '../styles/photos.css'


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
                    <h1>Capturando Momentos Inesquecíveis, Uma Foto de Cada Vez</h1>
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
                <div className="conteudo">
                    <h2>Minhas Fotografias</h2>
                    
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

            <section>
                
            </section>
        </>
    )
}
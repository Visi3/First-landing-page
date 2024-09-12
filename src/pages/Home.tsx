import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "../component/Button";
import '../styles/hero.css'

export default function Home() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <h1>Capturando Momentos Inesquecíveis, Uma Foto de Cada Vez</h1>
                    <p>Transforme suas memórias em arte com fotografias que contam histórias.
                    </p>
                    
                    <div className="flex gap-1">
                        <span><Button text="Contato" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                        
                    </div>
                    
            </div>
            </section>
        </>
    )
}
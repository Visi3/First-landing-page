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
import perfil1 from "../assets/images/perfil1.jpg"

import Button from "../component/Button";
import '../styles/hero.css'
import '../styles/photos.css'
import '../styles/about.css'
import '../styles/testimonial.css'
import '../styles/email.css'
import '../styles/prices.css'
import '../styles/contact.css'
import '../styles/footer.css'

import { useState } from "react";
import CarouselCard from "../component/CarouselCard";


export default function Home() {

    const [email, setMail] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        fetch('api', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3Njg1OTEwNjI0MDExMjAzNTk2IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJpdmNwaXRvbWJlaXJhQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InZOcktBWWtPTk8zU1dFMlB4UWE3VGciLCJuYmYiOjE3MzE5NDgyNDcsImlhdCI6MTczMTk0ODU0NywiZXhwIjoxNzMxOTUyMTQ3LCJqdGkiOiJiNmQ5MmE0MTlmZjdhMGY2MGY5ZjBjZjBjNjIwOTU1MWRiMDdkMGFmIn0.QgAU0BoNs-IbbgdBor7s-Rh-D2er8_Qc3c-6YRD6siuBV8-bnpQBXk26MG9wcata0n8_DLe5M80Nf7v5LicIp6ISRtxDltvzsRFiOvz7upq6K-2AOdOupvT1WmRrwa55UeHX1IwwevRy5P8MO3HfmxJj0SaZkLBbGNDNeLCpWcQ0blMj9yreziZ6sUl3ENn4ovwyHSLt6sRpXWQtUS5SdwnQU6Iq-b0-HfsMbXzjn-LTL0Aanm3UwaBzFnYqgobpP1EMHi_00YVlMICWhuLgCmMdCOYheTyW_pp3tBAhc81O77V7hPdiWKoAA3qJS6pMZF1TRMx_NUSgVgekB_qNxg',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                toMail: email,
                content: reason,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar o e-mail.");
                }
                return response.text();
            })
            .then((data) => {
                alert("E-mail enviado com sucesso!");
                console.log("Sucesso:", data);

                setMail('');
                setReason('');
            })
            .catch((error) => {
                console.error("Erro:", error);
                alert("Ocorreu um erro ao enviar o e-mail.");
            });
    };



    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <hr />
                    <h1>Capturando Momentos Inesquecíveis</h1>
                    <h1> Uma Foto de Cada Vez</h1>
                    <p>Transforme suas memórias em arte com fotografias que contam histórias.</p>

                    <div className="flex gap-1">
                        <span><Button text="Contato" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>

                    </div>
                </div>
            </section>

            <section id="photos">
                <span className="desktop-photos">
                    <img src={Circle1} alt="Circulo maior" />
                </span>

                <h2>Minhas Fotografias</h2>

                <div className="conteudo">
                    <img src={Debutante} alt="Foto de debutante" />
                    <img src={Cavalo} alt="Foto de uma grávida com um cavalo" />
                    <img src={Menina} alt="Foto de uma menina no campo" />
                    <img src={Casamento} alt="Foto de um casamento" />
                    <img src={Perto} alt="Foto de uma debudante de perto" />
                    <img src={Gravida} alt="Foto de uma grávida" />
                    <img src={Preto} alt="Foto preto e branco" />
                    <img src={Ruiva} alt="Foto de uma menina ruiva" />
                </div>

            </section>

            <section id="about">
                <h2>Sobre</h2>

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

            <section id="testimonials">
                <header>
                    <span >
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2 >
                            Cada cliente importa
                        </h2>
                    </span>
                    <p>
                        Quem conhece o meu trabalho sabe da dedicação e da qualidade que colocamos em cada clique.
                        Veja abaixo alguns depoimentos de clientes que confiaram em nosso olhar e se encantaram com o resultado.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <CarouselCard
                            imageSrc={perfil1}
                            altText="Cliente um"
                            testimony="As fotos ficaram maravilhosas! A fotógrafa capturou cada momento com perfeição e me deixou super à vontade. Foi uma experiência incrível e o resultado superou minhas expectativas!"
                            name="Roberta Rocha"
                            title="CEO BING CHILLING" />

                        <CarouselCard
                            imageSrc={perfil1}
                            altText="Cliente dois"
                            testimony="As fotos ficaram maravilhosas! A fotógrafa capturou cada momento com perfeição e me deixou super à vontade. Foi uma experiência incrível e o resultado superou minhas expectativas!"
                            name="Roberta Rocha"
                            title="CEO BING CHILLING" />

                        <CarouselCard
                            imageSrc={perfil1}
                            altText="Cliente tres"
                            testimony="As fotos ficaram maravilhosas! A fotógrafa capturou cada momento com perfeição e me deixou super à vontade. Foi uma experiência incrível e o resultado superou minhas expectativas!"
                            name="Roberta Rocha"
                            title="CEO BING CHILLING" />
                    </div>
                </section>

            </section>

            <section id="prices" className="container">
                <header>
                    <p className="desktop-only">Preços dos pacotes</p>
                    <h2>
                        Pacotes de fotos
                    </h2>
                </header>
                <section className="even-columns">
                    <div className="princing-cards">
                        <span className="plan">
                            <h3>Básica</h3>
                            <p>Este plano é perfeito para registros rápidos, como ensaios individuais, retratos ou pequenas celebrações.</p>
                        </span>
                        <h2>R$ 300,00</h2>
                        <Button text="Contatar agora" />
                        <span className="hr"></span>
                        <ul className="features">
                            <li>
                                <img></img>
                                <p>10 fotos editadas em alta resolução</p>
                            </li>
                            <li>
                                <img></img>
                                <p>1 hora de sessão em estúdio</p>
                            </li>
                            <li>
                                <img></img>
                                <p>Entrega das fotos via galeria online</p>
                            </li>
                        </ul>
                    </div>
                    <div className="premium">

                        <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                            <h3>Premium</h3>
                            <p>Perfeito para eventos importantes, ensaios temáticos ou produções mais elaboradas.</p>
                        </span>

                        <span className="price">
                            <h2>R$ 800,00</h2>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr"></span>
                        <ul className="features">
                            <li>
                                <img></img>
                                <p>30 fotos editadas em alta resolução</p>
                            </li>
                            <li>
                                <img></img>
                                <p>Mudança de até 2 figurinos</p>
                            </li>
                            <li>
                                <img></img>
                                <p>Até 3 horas de sessão em local externo ou estúdio.</p>
                            </li>
                        </ul>
                    </div>

                </section>

            </section>

            <section id="contact">
                <div className="contact-container">
                    <h2>Entre em Contato</h2>
                    <p>Preencha os campos abaixo para me enviar sua mensagem. Estou pronta para ajudar!</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="email" value={email} onChange={(event) => setMail(event.target.value)} placeholder="Seu e-mail" required />
                        <input type="text" value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Motivo do contato" required />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>

            <section id="footer">
                <div className="footer-container">

                    <div className="footer-links">
                        <h4>Atalhos:</h4>
                        <ul>
                            <li><a href="#home">Início</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Redes Sociais:</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <p>© 2024 Isabelly Castro. Todos os direitos reservados.</p>
                        <p>Desenvolvido com ♥ por Isabelly Castro.</p>
                    </div>
                </div>
            </section>
        </>
    )
};
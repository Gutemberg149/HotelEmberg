import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "../../components/navbar/NavBar";
import bcgHotel02 from "../../../assets/images/backGround/bcgHotel02.webp";
import lobby2 from "../../../assets/images/nossaHistoria/lobby2.jpeg";
import sustainable01 from "../../../assets/images/sustainability/sustainable01.webp";
import room01 from "../../../assets/images/homeImg/room01.avif";
import room04 from "../../../assets/images/rooms/room04.jpeg";
import bcgHotel04 from "../../../assets/images/backGround/bcgHotel04.jpeg";
import barHotel03 from "../../../assets/images/bar/barHotel03.webp";

function HomePage() {
  const [openImge, setOpenImg] = useState(false);
  const [openContainerSec3, setOpenContainerSec3] = useState(false);
  const [openContainerSec4, setOpenContainerSec4] = useState(false);
  const [openContainerSec5, setOpenContainerSec5] = useState(false);

  // This code is to open the image as scroll down the page in insection2.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY || window.pageYOffset;
      if (currentScrollPosition > 450) setOpenImg(true);
      if (currentScrollPosition > 900) setOpenContainerSec3(true);
      if (currentScrollPosition > 1550) setOpenContainerSec4(true);
      if (currentScrollPosition > 2200) setOpenContainerSec5(true);

      console.log(openContainerSec3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <header>
        <NavBar />
      </header>
      <section className="section1"></section>

      <section className="section2">
        <div className="sec2Part1">
          <h6>Emberg Hotel</h6>
          <span>Hotel Boutique Tropical</span>
          <p>
            Entre no nosso lobby de madeira polida e experimente imediatamente o serviço caloroso e pessoal que caracteriza Emeberg Hotel. Situado a beira mar,
            nosso hotel oferece um santuário sereno longe da agitada vida da cidade. Sol, mar ou piscina com sofisticação. Todo conforto de que o hotel pode o
            ferecer com todo luxo que é ter a natureza junto a você.
          </p>
        </div>
        <div className="sec2Part2">
          <div className="imgConatiner">
            <div className="overlayContainer" style={{ left: `${openImge ? "100%" : "0"}` }}></div>
            <img src={room01} alt="foto do quarto" />
          </div>

          <div className="part2Right" style={{ opacity: `${openImge ? "1" : "0"}` }}>
            <p className="textTitle">Seu bem estar é a nossa prioridade</p>
            <div className="textCase">
              Nossos quartos deluxe, lindamente projetados individualmente, e nossas suítes luxuosas capturam quase qualquer estado de espírito que lhe agrade:
              ousado, caprichoso, exótico, elegante ou aconchegante. Tecidos suntuosos, estampas coloridas e toques pessoais adicionam uma sensação
              surpreendentemente acolhedora e única que encanta nossos hóspedes.
            </div>
            <Link to={"/rooms"} className="roomnsLink">
              <p>Nossos quartos</p>
              <FaArrowRight className="arrowLeft" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="sec3Container">
          <div className="overlayContainer" style={{ right: `${openContainerSec3 ? "30rem" : "0rem"}` }}></div>
          <div className="imageContainer">
            <img src={lobby2} alt="foto do looby" />
          </div>
          <div className="textContainer">
            <p className="titleSec3"> Historia</p>
            <p className="textSec3">
              Fundado em 1952 pela família Rocha, o Emberg Hotel começou como uma modesta pousada à beira-mar e evoluiu para um renomado oásis tropical. O
              resort preservou sua estética tropical encantadora enquanto oferece comodidades modernas.
            </p>
            <Link className="linkToPage">
              Nossa jornada <FaArrowRight className="arrowLeft" />
            </Link>
          </div>
        </div>

        <div className="sec3Container">
          <div className="overlayContainer" style={{ right: `${openContainerSec3 ? "30rem" : "0rem"}` }}></div>
          <div className="imageContainer">
            <img src={sustainable01} alt="foto do jardim" />
          </div>
          <div className="textContainer">
            <p className="titleSec3">Compromisso Ambiental</p>
            <p className="textSec3">
              Em nosso hotel, a sustentabilidade é fundamental. Utilizamos energia solar, reciclamos resíduos e conservamos água. Nosso jardim orgânico fornece
              produtos frescos, e apoiamos as comunidades locais.
            </p>
            <Link className="linkToPage">
              Sustentabilidade <FaArrowRight className="arrowLeft" />
            </Link>
          </div>
        </div>

        <div className="sec3Container">
          <div className="overlayContainer" style={{ right: `${openContainerSec3 ? "30rem" : "0rem"}` }}></div>
          <div className="imageContainer">
            <img src={room04} alt="foto do quarto" />
          </div>
          <div className="textContainer">
            <p className="titleSec3">Acomodações</p>
            <p className="textSec3">
              Nossos quartos de hotel são projetados para o máximo conforto e relaxamento. Cada quarto possui roupa de cama luxuosa, comodidades modernas e
              vistas deslumbrantes. Com atenção aos detalhes e foco na satisfação do hóspede.
            </p>
            <Link className="linkToPage">
              Quartos <FaArrowRight className="arrowLeft" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="overlayContainer" style={{ top: `${openContainerSec4 ? "-40rem" : "0"}` }}></div>
        <div className="overlay"></div>
        <p className="sec4Title">Bem Vindo a Boracay</p>
        <p className="sec4Text">
          Localizada no coração do deslumbrante arquipélago das Filipinas, Boracay oferece aos hóspedes uma experiência tropical incomparável em uma das ilhas
          mais queridas do país. Nossa localização garante que os hóspedes tenham fácil acesso ao melhor que Boracay tem a oferecer, desde as areias brancas e
          pristinas de suas famosas praias até a vibrante vida noturna e as diversas atividades aquáticas.
        </p>
      </section>

      <section className="section5">
        <div className="leftSideSec5">
          <div className="overlayContainer" style={{ left: `${openContainerSec5 ? "100%" : "0"}` }}></div>
          {/* <div className="imgContainersec5"> */}
          <img src={barHotel03} alt="foto de barman" />
          {/* </div> */}
        </div>
        <div className="rightSideSec5" style={{ opacity: `${openContainerSec5 ? "1" : "0"}` }}>
          <p className="textTitle">Terraço Bar</p>
          <div className="textCase">
            Envoltos em uma atmosfera de sofisticação atemporal, o Terraço Bar irradia calor e elegância com sua decoração convidativa e ambiente acolhedor.
            Relaxe confortavelmente enquanto saboreia uma seleção cuidadosamente elaborada de coquetéis artesanais, destilados premium e vinhos finos.
          </div>
          <Link to={"/rooms"} className="barLink">
            <p>Terraço Bar</p>
            <FaArrowRight className="arrowLeft" />
          </Link>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  .section1 {
    width: 100%;
    height: 70vh;
    background-image: url(${bcgHotel02});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .section2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    .sec2Part1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 40vh;
      width: 50rem;
      h6 {
        font-size: 1.4rem;
        font-weight: 300;
      }
      span {
        font-size: 2.3rem;
        font-weight: 300;
        margin-bottom: 2rem;
      }
      p {
        font-weight: 300;
        font-size: 1.1rem;
        text-align: center;
        line-height: 2rem;
      }
    }
    .sec2Part2 {
      display: flex;
      width: 70%;
      margin-top: 2rem;
      .part2Right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45%;
        transition: 3s;
        .textTitle {
          font-size: 1.9rem;
          margin-bottom: 1rem;
          font-weight: 400;
          width: 70%;
          color: #3b3b3b;
        }
        .textCase {
          font-size: 0.9rem;
          width: 70%;
          line-height: 1.7rem;
        }
        .roomnsLink {
          width: 70%;
          display: flex;
          align-items: center;
          margin-top: 1rem;
          height: 2rem;
          cursor: pointer;
          p {
            font-size: 0.8rem;
            transition: 0.3s;
            color: #a36002;
          }
          .arrowLeft {
            font-size: 0.8rem;
            transition: 0.3s;
            color: #b76c02;
            margin-left: 0.8rem;
          }
        }
        .roomnsLink:hover > p,
        .roomnsLink:hover > .arrowLeft {
          transform: translateX(0.5rem);
        }
      }
      .imgConatiner {
        position: relative;
        overflow: hidden;
        .overlayContainer {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 99;
          background-color: white;
          transition: 2.7s;
        }
      }

      img {
        width: 35rem;
        z-index: 1;
      }
    }
  }

  .section3 {
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    .sec3Container {
      position: relative;
      width: 22rem;
      height: 30rem;
      overflow: hidden;
      margin: 2rem;
      .overlayContainer {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        transition: 2.5s;
      }

      .imageContainer {
        width: 100%;
        height: 55%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .textContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 45%;
        .titleSec3 {
          font-size: 1.5rem;
          font-weight: 300;
          color: #383838;
        }
        .textSec3 {
          padding: 0 0.5rem;
          font-size: 0.9rem;
          text-align: justify;
          margin-bottom: 1.5rem;
        }
        .linkToPage {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          color: #b76c02;
          transition: 0.3s;
          cursor: pointer;
          .arrowLeft {
            font-size: 0.8rem;
            transition: 0.3s;
            color: #b76c02;
            margin-left: 0.5rem;
          }
          cursor: pointer;
        }
        .linkToPage:hover {
          transform: translateX(0.5rem);
        }
      }
    }
  }
  .section4 {
    position: relative;
    width: 100%;
    height: 70vh;
    background-image: url(${bcgHotel04});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .overlayContainer {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: white;
      z-index: 99;
      transition: 2.5s;
    }
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #00000081;
      z-index: 1;
    }
    .sec4Title {
      color: #d7d7d7;
      margin-right: 2rem;
      font-size: 4rem;
      z-index: 98;
    }
    .sec4Text {
      color: #d7d7d7;
      color: white;
      width: 30%;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      z-index: 98;
    }
  }
  .section5 {
    display: flex;
    height: 80vh;
    .leftSideSec5 {
      position: relative;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      .overlayContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-color: white;
        transition: 2.4s;
      }
      img {
        width: 32rem;
      }
    }
    .rightSideSec5 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      transition: 6s;
      .textTitle {
        font-size: 4rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        color: #171717;
      }
      .textCase {
        width: 80%;
        font-size: 1.1rem;
        text-align: justify;
        line-height: 1.6rem;
        margin-bottom: 2rem;
      }
      .barLink {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        height: 2rem;
        cursor: pointer;
        p {
          font-size: 1rem;
          transition: 0.3s;
          color: #a36002;
          cursor: pointer;
        }
        .arrowLeft {
          font-size: 0.9rem;
          transition: 0.3s;
          color: #b76c02;
          margin-left: 0.8rem;
          margin-top: 0.1rem;
          cursor: pointer;
        }
        p:hover {
          transform: translateX(0.5rem);
        }
        p:hover ~ .arrowLeft {
          transform: translateX(0.5rem);
        }
        &:hover .arrowLeft {
          transform: translateX(0.5rem);
        }
        &:hover p {
          transform: translateX(0.5rem);
        }
      }

      /* p:hover > p,
      .arrowLeft {
        transform: translateX(0.5rem);
      } */
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 300px) {
    .section1 {
      width: 100%;
      height: 20vh;
    }
    .section2 {
      padding: 0 0.5rem;
      margin-top: 0.5rem;
      .sec2Part1 {
        height: 45vh;
        width: 100%;
        h6 {
          font-size: 0.7rem;
          font-weight: 300;
        }
        span {
          font-size: 0.9rem;
          font-weight: 300;
          margin-bottom: 0.6rem;
        }
        p {
          font-weight: 300;
          font-size: 0.8rem;
          text-align: center;
          line-height: 0.8rem;
        }
      }
      .sec2Part2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 0rem;
        .part2Right {
          width: 100%;
          .textTitle {
            font-size: 0.9rem;
            margin-bottom: 1rem;
            font-weight: 500;
            text-align: center;
            width: 100%;
          }
          .textCase {
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
            line-height: 1.2rem;
          }
          .roomnsLink {
            width: 100%;
            justify-content: center;
            margin-top: 0rem;

            p {
            }
            .arrowLeft {
            }
          }
          .roomnsLink:hover > p,
          .roomnsLink:hover > .arrowLeft {
            transform: translateX(0.5rem);
          }
        }
        .imgConatiner {
          position: relative;
          overflow: hidden;
          .overlayContainer {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 99;
            background-color: white;
            transition: 2.7s;
          }
        }

        img {
          width: 100%;
          z-index: 1;
        }
      }
    }

    .section3 {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 70rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding: 0 0.5rem;
      .sec3Container {
        width: 200px;
        height: 22rem;
        margin: 0rem;

        .overlayContainer {
          transition: 1.5s;
        }
        .imageContainer {
          width: 100%;
          height: 35%;
          overflow: hidden;

          img {
            width: 100%;
          }
        }
        .textContainer {
          margin-top: 0.5rem;
          .titleSec3 {
            font-size: 0.9rem;
            font-weight: 300;
            color: #383838;
          }
          .textSec3 {
            padding: 0 0.5rem;
            font-size: 0.8rem;
            text-align: justify;
            margin-bottom: 1rem;
          }
          .linkToPage {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            color: #b76c02;
            transition: 0.3s;
            cursor: pointer;
            .arrowLeft {
              font-size: 0.8rem;
              transition: 0.3s;
              color: #b76c02;
              margin-left: 0.5rem;
            }
            cursor: pointer;
          }
          .linkToPage:hover {
            transform: translateX(0.5rem);
          }
        }
      }
    }
    .section4 {
      flex-direction: column;
      width: 100%;
      height: 70vh;
      padding: 0 0.5rem;
      .overlayContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: white;
        z-index: 99;
        transition: 2.5s;
      }
      .overlay {
      }
      .sec4Title {
        color: white;
        margin-right: 0;
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }
      .sec4Text {
        width: 100%;
        font-size: 0.8rem;
        line-height: 1rem;
        text-align: justify;
      }
    }
    .section5 {
      flex-direction: column;
      height: auto;
      margin-top: 1.5rem;
      padding: 0 0.5rem;
      .leftSideSec5 {
        position: relative;
        width: 100%;
        /* display: flex;
        align-items: center;
        justify-content: center; */

        .overlayContainer {
          /* position: absolute;
          width: 100%;
          height: 100%;
          z-index: 99;
          background-color: white;
          transition: 2.4s; */
        }
        img {
          width: 100%;
        }
      }
      .rightSideSec5 {
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        width: 100%;
        /* transition: 6s; */
        .textTitle {
          font-size: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .textCase {
          width: 100%;
          font-size: 0.8rem;
          line-height: 1.4rem;
          margin-bottom: 0rem;
        }
        .barLink {
          margin-top: 0rem;
          height: 2rem;
          cursor: pointer;
          p {
            font-size: 0.9rem;
            transition: 0.3s;
          }
          .arrowLeft {
            font-size: 0.8rem;
            transition: 0.3s;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 301px) and (max-device-width: 374px) {
    .section1 {
      width: 100%;
      height: 20vh;
    }
    .section2 {
      padding: 0 0.5rem;
      margin-top: 0.5rem;
      .sec2Part1 {
        height: 45vh;
        width: 100%;
        h6 {
          font-size: 0.7rem;
          font-weight: 300;
        }
        span {
          font-size: 0.9rem;
          font-weight: 300;
          margin-bottom: 0.6rem;
        }
        p {
          font-weight: 300;
          font-size: 0.8rem;
          text-align: center;
          line-height: 0.8rem;
        }
      }
      .sec2Part2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 0rem;
        .part2Right {
          width: 100%;
          .textTitle {
            font-size: 0.9rem;
            margin-bottom: 1rem;
            font-weight: 500;
            text-align: center;
            width: 100%;
          }
          .textCase {
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
            line-height: 1.2rem;
          }
          .roomnsLink {
            width: 100%;
            justify-content: center;
            margin-top: 0rem;

            p {
            }
            .arrowLeft {
            }
          }
          .roomnsLink:hover > p,
          .roomnsLink:hover > .arrowLeft {
            transform: translateX(0.5rem);
          }
        }
        .imgConatiner {
          position: relative;
          overflow: hidden;
          .overlayContainer {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 99;
            background-color: white;
            transition: 2.7s;
          }
        }

        img {
          width: 100%;
          z-index: 1;
        }
      }
    }

    .section3 {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 60rem;
      margin-top: 3rem;
      margin-bottom: 1rem;
      padding: 0 0.5rem;
      .sec3Container {
        width: 300px;
        height: 20rem;
        margin: 0rem;

        .overlayContainer {
          transition: 1.5s;
        }
        .imageContainer {
          width: 100%;
          height: 45%;
          overflow: hidden;

          img {
            width: 100%;
          }
        }
        .textContainer {
          margin-top: 0.5rem;
          height: 55%;
          .titleSec3 {
            font-size: 0.95rem;
            font-weight: 300;
            color: #383838;
          }
          .textSec3 {
            padding: 0 0.5rem;
            font-size: 0.85rem;
            text-align: justify;
            margin-bottom: 1rem;
          }
          .linkToPage {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            color: #b76c02;
            transition: 0.3s;
            cursor: pointer;
            .arrowLeft {
              font-size: 0.8rem;
              transition: 0.3s;
              color: #b76c02;
              margin-left: 0.5rem;
            }
            cursor: pointer;
          }
          .linkToPage:hover {
            transform: translateX(0.5rem);
          }
        }
      }
    }
    .section4 {
      flex-direction: column;
      width: 100%;
      height: 70vh;
      padding: 0 0.5rem;
      .overlayContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: white;
        z-index: 99;
        transition: 2.5s;
      }
      .overlay {
      }
      .sec4Title {
        color: white;
        margin-right: 0;
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }
      .sec4Text {
        width: 100%;
        font-size: 0.8rem;
        line-height: 1rem;
        text-align: justify;
      }
    }
    .section5 {
      flex-direction: column;
      height: auto;
      margin-top: 1.5rem;
      padding: 0 0.5rem;
      .leftSideSec5 {
        position: relative;
        width: 100%;
        /* display: flex;
        align-items: center;
        justify-content: center; */

        .overlayContainer {
          /* position: absolute;
          width: 100%;
          height: 100%;
          z-index: 99;
          background-color: white;
          transition: 2.4s; */
        }
        img {
          width: 100%;
        }
      }
      .rightSideSec5 {
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        width: 100%;
        /* transition: 6s; */
        .textTitle {
          font-size: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .textCase {
          width: 100%;
          font-size: 0.8rem;
          line-height: 1.4rem;
          margin-bottom: 0rem;
        }
        .barLink {
          margin-top: 0rem;
          height: 2rem;
          cursor: pointer;
          p {
            font-size: 0.9rem;
            transition: 0.3s;
          }
          .arrowLeft {
            font-size: 0.8rem;
            transition: 0.3s;
          }
        }
      }
    }
  }
`;

export default HomePage;

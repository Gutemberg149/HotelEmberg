import styled from "styled-components";
import Logo from "../../../assets/images/logo/hotelLogo.png";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { LanguageToggleContext } from "../../context/LanguageContext";
import { useUserAuth } from "../../context/userAuthContext";
import isEmail from "validator/lib/isEmail";

function NavBar() {
  //context to change site's language. (Language context).
  const { portugues, setPortugues } = useContext(LanguageToggleContext);
  const [navColor, setNavColor] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [toggleNavBarColor, setToggleNavBarColor] = useState(false);
  const [toggleSignDropDown, setToggleSignDropDown] = useState(false);
  const [toggleLeftAsideMenu, setToggleLeftAsideMenu] = useState(false);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  //This code is to change the color of the navBar.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY || window.pageYOffset;
      if (currentScrollPosition > 150) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }

      console.log(openContainerSec3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Handle the pages'language.
  const handleLanguageToggle = () => {
    setPortugues(!portugues);
  };

  //send the email and password values to userAuthcontex for sign in also to check if the user is logged in or not.
  const { signIn, logOut, user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setErrorMessage(false);
      setEmail("");
      setPassword("");
      setToggleSignDropDown(false);
    } catch (error) {
      setErrorMessage(true);
      setEmail("");
      setPassword("");
    }
  };

  //UseEffect for checking if password is valid or Not, if it is valid the 'layOverbtn' will disabled and the sign in btn abled.
  useEffect(() => {
    if (password.length > 0) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [password]);

  //gettin the user name from localStorage.
  let localStorageUserName = JSON.parse(localStorage.getItem("localStorageUserName")) || [];

  //display message in case input is not filled or the fields value are wrong.
  function errorMessageFunction() {
    setErrorMessage(true);
    console.log(errorMessage);
  }

  // To open and close the sign in dropdown menu and change color of the navabar
  function toggleDropDownSignIn() {
    setToggleSignDropDown(!toggleSignDropDown);
    setToggleLeftAsideMenu(false);
    setErrorMessage(false);
    setEmail("");
    setPassword("");
  }

  //Toggle aside menu in and out and make singDroDown disaper.
  function FuncToggleLeftAsideMenu() {
    setToggleLeftAsideMenu(!toggleLeftAsideMenu);
    setToggleSignDropDown(false);
  }

  useEffect(() => {
    if (toggleLeftAsideMenu || toggleSignDropDown) {
      setToggleNavBarColor(true);
    } else {
      setToggleNavBarColor(false);
    }
  }, [toggleLeftAsideMenu, toggleSignDropDown]);

  //To disable or able the burger menu in large or small screen size.
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //To close the sign in container or the Aside menu
  // useRef (assigned to navBarRef) to refer to the NavBar component.
  const navBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navBarRef.current && !navBarRef.current.contains(event.target)) {
        setToggleSignDropDown(false);
        setToggleLeftAsideMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Icon close that closes the Aside Menu When the screen is small size.
  function closeMenuAside() {
    setToggleLeftAsideMenu(false);
  }
  return (
    <Wrapper
      ref={navBarRef}
      style={{
        backgroundColor: `${
          toggleNavBarColor && navColor
            ? "#000000ec"
            : toggleNavBarColor && !navColor
            ? "#000000ec"
            : !toggleNavBarColor && navColor
            ? "#000000ec"
            : "#0000007d"
        }`,
      }}
    >
      <div className="left">
        <ul>
          <li>
            <div className="burger-menu" onClick={FuncToggleLeftAsideMenu}>
              <div
                className="line line_top"
                style={{ transform: `${screenSize > 900 && toggleLeftAsideMenu ? "rotate(50deg) translateY(13px)" : "rotate(0) translateY(0px)"}` }}
              ></div>
              <div className="line line_middle" style={{ opacity: `${screenSize > 900 && toggleLeftAsideMenu ? "0" : "1"}` }}></div>
              <div
                className="line line_bottom"
                style={{ transform: `${screenSize > 900 && toggleLeftAsideMenu ? "rotate(-50deg) translateY(-13px)" : "rotate(0) translateY(0px)"}` }}
              ></div>
            </div>
            <aside className="leftAsideMenu" style={{ left: `${toggleLeftAsideMenu ? "0" : toggleLeftAsideMenu && screenSize <= 300 ? "-12rem" : "-100vw"}` }}>
              <ul style={{ display: `${portugues ? "none" : "flex"}` }}>
                <div className="closeBtn" onClick={closeMenuAside}>
                  <IoMdClose style={{ color: "white" }} />
                </div>
                <li>Nossa historia</li>
                <li>Sustentabilidade</li>
                <Link to={"/rooms"}>
                  <li>Quartos</li>
                </Link>
              </ul>

              <ul style={{ display: `${portugues ? "flex" : "none"}` }}>
                <div className="closeBtn" onClick={closeMenuAside}>
                  <IoMdClose style={{ color: "white" }} />
                </div>
                <li>Our history</li>
                <li>Sustainability</li>
                <li>Rooms</li>
              </ul>
            </aside>
          </li>
          <li>
            <Link to={"/"}>
              <div className="pHome">HOME</div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="middle">
        <img className="logo" src={Logo} alt="picture of the logo" />
      </div>

      <ul className="Ulright">
        <li className="languageChoice portugues" onClick={handleLanguageToggle} style={{ display: `${portugues ? "block" : "none"}` }}>
          PORTUGUES
        </li>
        <li className="languageChoice english" onClick={handleLanguageToggle} style={{ display: `${portugues ? "none" : "block"}` }}>
          ENGLISH
        </li>

        <li className="contact" style={{ display: `${portugues ? "block" : "none"}` }}>
          CONTACT
        </li>
        <li className="contact" style={{ display: `${portugues ? "none" : " block"}` }}>
          CONTATO
        </li>

        <li className="signIn" style={{ display: `${user ? "none" : "block"}` }}>
          <p onClick={toggleDropDownSignIn}>SIGN IN</p>
          <div className="containerAside" style={{ display: `${toggleSignDropDown ? "block" : "none"}` }}>
            <aside className="BoxSignIn" style={{ display: `${portugues ? "none" : "block"}` }}>
              <div className="top">
                <p className="title">Entrar na conta</p>

                <div className="closeDiv" onClick={toggleDropDownSignIn}>
                  <IoMdClose className="iconClose" />
                </div>
              </div>

              <div className="mainPart">
                <p className="topMainPart">Entre com seu email e password.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    className="inputRegister inputEmail"
                    type="email"
                    id="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(isEmail(e.target.value));
                    }}
                    value={email}
                    placeholder="Email"
                  />
                  <input
                    className="inputRegister"
                    type="password"
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                  <div className="errorMEssageBox">
                    <p style={{ display: `${errorMessage ? "flex" : "none"}` }}>Email ou Password estar errado.</p>
                  </div>
                  <div className="btnContainer">
                    <div
                      className="layOverbtn"
                      onClick={errorMessageFunction}
                      style={{ display: `${isEmailValid && isPasswordValid ? "none" : "block"}` }}
                    ></div>
                    <button>Entrar</button>
                  </div>
                </form>
                <div className="bottom">
                  <p className="pBottom">Não é cadastrado?</p>
                  <Link to={"/signup"}>Registre aqui.</Link>
                </div>
              </div>
            </aside>

            <aside className="BoxSignIn" style={{ display: `${portugues ? "block" : "none"}` }}>
              <div className="top">
                <p className="title">Sign in</p>

                <div className="closeDiv" onClick={toggleDropDownSignIn}>
                  <IoMdClose className="iconClose" />
                </div>
              </div>

              <div className="mainPart">
                <p className="topMainPart">Entre with your email and password.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    className="inputRegister inputEmail"
                    type="email"
                    id="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(isEmail(e.target.value));
                    }}
                    value={email}
                    placeholder="Email"
                  />
                  <input
                    className="inputRegister"
                    type="password"
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                  <div className="errorMEssageBox">
                    <p style={{ display: `${errorMessage ? "flex" : "none"}` }}>Email or Password is wrong.</p>
                  </div>
                  <div className="btnContainer">
                    <div
                      className="layOverbtn"
                      onClick={errorMessageFunction}
                      style={{ display: `${isEmailValid && isPasswordValid ? "none" : "block"}` }}
                    ></div>
                    <button>Sign in</button>
                  </div>
                </form>
                <div className="bottom">
                  <p className="pBottom">Not a member?</p>
                  <Link to={"/signup"}>Register here.</Link>
                </div>
              </div>
            </aside>
          </div>
        </li>

        <li className="SingOut" onClick={logOut} style={{ display: `${user ? "block" : "none"}` }}>
          <p>SIGN OUT</p>
        </li>
        <li className="bookBox">BOOK</li>
        <li className="userName">{localStorageUserName}</li>
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  left: 0;
  position: fixed;
  z-index: 100;
  transition: 0.2s;

  .left {
    width: 33.33%;

    ul {
      display: flex;
      align-items: center;
      padding-left: 2rem;
      li {
        .leftAsideMenu {
          position: absolute;
          width: 12rem;
          height: 90vh;
          background-color: #000000ec;
          bottom: -90vh;
          transition: 0.4s;

          ul {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-between;
            margin-top: 3rem;
            height: 10rem;
            padding: 0 0 0 0.5rem;

            .closeBtn {
              display: none;
            }
            li {
              display: flex;
              align-items: center;
              justify-content: start;
              width: 100%;
              height: 3rem;
              color: white;
              font-size: 1.1rem;
              font-weight: 300;
              transition: 0.4s;
              cursor: pointer;
            }
            li:hover {
              color: #ff6600;
              transform: translateX(0.5rem);
            }
          }
        }
      }
    }

    .burger-menu {
      width: 30px;
      height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.3s;
      cursor: pointer;
      .line {
        height: 3px;
        background-color: white;
        border-radius: 2px;
        transition: 0.5s;
      }
    }

    .burger-menu:hover > .line {
      background-color: #ff6600;
    }

    .pHome {
      color: white;
      font-size: 0.9rem;
      font-weight: 300;
      margin-left: 2.5rem;
      cursor: pointer;
    }
    .pHome:hover {
      color: #ff6600;
    }
  }

  .middle {
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      width: 4.5rem;
      border-radius: 50%;
    }
  }
  .Ulright {
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding-right: 2rem;
    li {
    }

    .languageChoice {
      width: 5rem;
      color: white;
      font-size: 0.75rem;
      cursor: pointer;
    }
    .languageChoice:hover {
      color: #ff6600;
    }
    .contact {
      color: white;
      font-size: 0.75rem;
      cursor: pointer;
    }
    .contact:hover {
      color: #ff6600;
    }
    .signIn {
      p {
        color: white;
        font-size: 0.75rem;
        cursor: pointer;
      }

      .BoxSignIn {
        left: 0;
        position: absolute;
        height: 20rem;
        width: 100%;
        bottom: -20rem;
        background-color: #000000ec;
        padding: 0rem 5.5rem 2rem 2rem;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          .title {
            font-size: 1rem;
            font-weight: 400;
          }
          .closeDiv {
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .iconClose {
              font-size: 1.2rem;
              color: white;
            }
            .iconClose:hover {
              color: #ff6600;
            }
          }
        }
        .mainPart {
          .topMainPart {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          form {
            display: flex;
            flex-direction: column;
            input {
              width: 100%;
              height: 2.5rem;
              font-size: 1rem;
              color: white;
              background-color: transparent;
              border: none;
              border-bottom: 0.5px solid white;
            }
            .inputEmail {
              margin-bottom: 1rem;
            }
            input:focus {
              outline: none;
              background-color: transparent;
            }
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px white inset !important;
              -webkit-text-fill-color: #000 !important;
              background-color: transparent;
            }
            input::placeholder {
              font-size: 0.9rem;
              color: #dadada;
            }
            input:focus::placeholder {
              opacity: 0;
            }
            .errorMEssageBox {
              height: 2rem;
              display: flex;
              align-items: center;

              p {
                font-size: 0.8rem;
                color: red;
              }
            }
            .btnContainer {
              position: relative;
              width: 5.5rem;
              height: 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1rem;
              .layOverbtn {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: transparent;
              }
            }
          }

          button {
            width: 5rem;
            height: 1.7rem;
            background-color: transparent;
            border: 2px solid white;
            color: white;
            cursor: pointer;
          }
        }
        .bottom {
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: 1rem;
          .pBottom {
            font-size: 0.9rem;
            margin-right: 0.4rem;
          }
          a {
            font-size: 1rem;
            color: red;
          }
        }
      }
    }
    .signIn:hover > p {
      color: #ff6600;
    }
    .SingOut {
      color: white;
      font-size: 0.75rem;
      cursor: pointer;
    }
    .SingOut:hover > p {
      color: #ff6600;
    }
    .userName {
      font-size: 0.85rem;
      color: white;
    }
    .bookBox {
      width: 4rem;
      height: 2rem;
      font-size: 0.7rem;
      color: white;
      border: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .bookBox:hover {
      border: 1px solid #ff6600;
      color: #ff6600;
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 300px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 5rem;
    position: relative;
    .left {
      width: auto;
      margin-left: 0.2rem;
      ul {
        display: flex;
        align-items: center;
        padding-left: 0.1rem;
        li {
          .leftAsideMenu {
            position: absolute;
            width: 100%;
            height: 90vh;
            background-color: #000000ec;
            bottom: -90vh;
            transition: 0.4s;
            ul {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: space-between;
              margin-top: 3rem;
              height: 10rem;
              padding: 0 0 0 0.5rem;
              .closeBtn {
                display: block;
                position: absolute;
                right: 0.5rem;
                top: -2rem;
              }
              li {
                display: flex;
                align-items: center;
                justify-content: start;
                width: 100%;
                height: 3rem;
                color: white;
                font-size: 1.1rem;
                font-weight: 300;
                transition: 0.4s;
                cursor: pointer;
              }
              li:hover {
                color: #ff6600;
                transform: translateX(0.5rem);
              }
            }
          }
        }
      }

      .burger-menu {
        width: 15px;
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s;
        cursor: pointer;
        .line {
          height: 1px;
        }
      }
      .burger-menu:hover > .line {
        background-color: #ff6600;
      }

      .pHome {
        color: white;
        font-size: 0.7rem;
        font-weight: 300;
        margin-left: 0.5rem;
        cursor: pointer;
      }
      .pHome:hover {
        color: #ff6600;
      }
    }
    .middle {
      width: auto;
      .logo {
        width: 2rem;
      }
    }
    .Ulright {
      width: 30%;
      height: 100%;
      flex-wrap: wrap;
      justify-content: end;
      padding-right: 0.2rem;
      position: unset;
      .languageChoice {
        width: auto;
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .languageChoice:hover {
        color: #ff6600;
      }
      .contact {
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .contact:hover {
        color: #ff6600;
      }
      .signIn {
        margin-right: 0.5rem;
        p {
          font-size: 0.6rem;
        }

        .BoxSignIn {
          position: absolute;
          left: 0;
          height: 60vh;
          width: 100%;
          bottom: -60vh;
          background-color: #000000ec;
          padding: 1rem 0.3rem 0rem 0.3rem;
          .top {
            margin-bottom: 0.5rem;
            .title {
              font-size: 0.9rem;
              font-weight: 400;
            }
            .closeDiv {
              width: 1.1rem;
              height: 1.1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              .iconClose {
                font-size: 1.1rem;
                color: white;
              }
              .iconClose:hover {
                color: #ff6600;
              }
            }
          }
          .mainPart {
            .topMainPart {
              font-size: 0.65rem;
              margin: 1rem 0;
            }
            form {
              display: flex;
              flex-direction: column;
              input {
                width: 100%;
                height: 2.5rem;
                font-size: 0.8rem;
                color: white;
                background-color: transparent;
                border: none;
                border-bottom: 0.5px solid white;
              }
              .inputEmail {
                margin-bottom: 1rem;
              }
              input:focus {
                outline: none;
                background-color: transparent;
              }
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                background-color: transparent;
              }
              input::placeholder {
                font-size: 0.8rem;
                color: #dadada;
              }
              input:focus::placeholder {
                opacity: 0;
              }
              .errorMEssageBox {
                height: 2rem;
                display: flex;
                align-items: center;

                p {
                  font-size: 0.7rem;
                  color: red;
                }
              }
              .btnContainer {
                position: relative;
                width: 5rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;

                .layOverbtn {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
              }
            }

            button {
              height: 1.6rem;
              background-color: transparent;
              border: 1px solid white;
              font-size: 0.8rem;
              color: white;

              cursor: pointer;
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;

            .pBottom {
              font-size: 0.7rem;
              margin-right: 0.4rem;
            }
            a {
              font-size: 0.75rem;
              font-weight: 500;
              color: red;
            }
          }
        }
      }
      .signIn:hover > p {
        color: #ff6600;
      }
      .SingOut {
        color: white;
        font-size: 0.5rem;
        cursor: pointer;
      }
      .SingOut:hover > p {
        color: #ff6600;
      }
      .userName {
        font-size: 0.5rem;
      }
      .bookBox {
        width: 2.2rem;
        height: 1.2rem;
        font-size: 0.5rem;
      }
      .bookBox:hover {
        border: 1px solid #ff6600;
        color: #ff6600;
      }
    }
  }
  @media only screen and (min-device-width: 301px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 5rem;
    position: relative;
    .left {
      width: auto;
      ul {
        display: flex;
        align-items: center;
        padding-left: 0.8rem;

        li {
          .leftAsideMenu {
            position: absolute;
            width: 12rem;
            height: 90vh;
            background-color: #000000ec;
            bottom: -90vh;
            transition: 0.4s;
            ul {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: space-between;
              margin-top: 3rem;
              height: 10rem;
              padding: 0 0 0 0.5rem;
              .closeBtn {
                font-size: 1.2rem;
                color: white;
                display: block;
                position: absolute;
                right: 1rem;
                top: -2rem;
              }
              li {
                display: flex;
                align-items: center;
                justify-content: start;
                width: 100%;
                height: 3rem;
                color: white;
                font-size: 1.1rem;
                font-weight: 300;
                transition: 0.4s;
                cursor: pointer;
              }
              li:hover {
                color: #ff6600;
                transform: translateX(0.5rem);
              }
            }
          }
        }
      }

      .burger-menu {
        width: 15px;
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s;
        cursor: pointer;
        .line {
          height: 1px;
        }
      }
      .burger-menu:hover > .line {
        background-color: #ff6600;
      }

      .pHome {
        color: white;
        font-size: 0.7rem;
        font-weight: 300;
        margin-left: 0.5rem;
        cursor: pointer;
      }
      .pHome:hover {
        color: #ff6600;
      }
    }
    .middle {
      width: auto;
      .logo {
        width: 2rem;
      }
    }
    .Ulright {
      width: auto;
      height: 100%;
      justify-content: center;
      padding-right: 0.2rem;
      position: unset;
      .languageChoice {
        width: auto;
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .languageChoice:hover {
        color: #ff6600;
      }
      .contact {
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .contact:hover {
        color: #ff6600;
      }
      .signIn {
        margin-right: 0.5rem;
        p {
          font-size: 0.6rem;
        }

        .BoxSignIn {
          position: absolute;
          left: 0;
          height: 60vh;
          width: 100%;
          bottom: -60vh;
          background-color: #000000ec;
          padding: 1.5rem 1rem 0rem 1rem;
          .top {
            margin-bottom: 0.5rem;
            .title {
              font-size: 1rem;
              font-weight: 400;
            }
            .closeDiv {
              width: 1.3rem;
              height: 1.3rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              .iconClose {
                font-size: 1.2rem;
                color: white;
              }
              .iconClose:hover {
                color: #ff6600;
              }
            }
          }
          .mainPart {
            .topMainPart {
              font-size: 0.8rem;
              margin: 1rem 0;
            }
            form {
              display: flex;
              flex-direction: column;
              input {
                width: 100%;
                height: 2.5rem;
                font-size: 0.95rem;
                color: white;
                background-color: transparent;
                border: none;
                border-bottom: 0.5px solid white;
              }
              .inputEmail {
                margin-bottom: 1rem;
              }
              input:focus {
                outline: none;
                background-color: transparent;
              }
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                background-color: transparent;
              }
              input::placeholder {
                font-size: 0.8rem;
                color: #dadada;
              }
              input:focus::placeholder {
                opacity: 0;
              }
              .errorMEssageBox {
                height: 2rem;
                display: flex;
                align-items: center;

                p {
                  font-size: 0.7rem;
                  color: red;
                }
              }
              .btnContainer {
                position: relative;
                width: 5rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;

                .layOverbtn {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
              }
            }

            button {
              height: 1.6rem;
              background-color: transparent;
              border: 1px solid white;
              font-size: 0.8rem;
              color: white;

              cursor: pointer;
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;

            .pBottom {
              font-size: 0.8rem;
              margin-right: 0.4rem;
            }
            a {
              font-size: 0.9rem;
              font-weight: 500;
              color: red;
            }
          }
        }
      }
      .signIn:hover > p {
        color: #ff6600;
      }
      .SingOut {
        color: white;
        font-size: 0.5rem;
        cursor: pointer;
      }
      .SingOut:hover > p {
        color: #ff6600;
      }
      .userName {
        font-size: 0.5rem;
      }
      .bookBox {
        width: 2.5rem;
        height: 1.5rem;
        font-size: 0.5rem;
      }
      .bookBox:hover {
        border: 1px solid #ff6600;
        color: #ff6600;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 500px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 5rem;
    position: relative;
    .left {
      width: 25%;

      ul {
        display: flex;
        align-items: center;
        padding-left: 0.8rem;
        li {
          .leftAsideMenu {
            position: absolute;
            width: 12rem;
            height: 90vh;
            background-color: #000000ec;
            bottom: -90vh;
            transition: 0.4s;
            ul {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: space-between;
              margin-top: 3rem;
              height: 10rem;
              padding: 0 0 0 0.5rem;
              .closeBtn {
                font-size: 1.2rem;
                color: white;
                display: block;
                position: absolute;
                right: 1rem;
                top: -2rem;
              }
              li {
                display: flex;
                align-items: center;
                justify-content: start;
                width: 100%;
                height: 3rem;
                color: white;
                font-size: 1.1rem;
                font-weight: 300;
                transition: 0.4s;
                cursor: pointer;
              }
              li:hover {
                color: #ff6600;
                transform: translateX(0.5rem);
              }
            }
          }
        }
      }

      .burger-menu {
        width: 17px;
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s;
        cursor: pointer;
        .line {
          height: 1px;
        }
      }
      .burger-menu:hover > .line {
        background-color: #ff6600;
      }

      .pHome {
        color: white;
        font-size: 0.8rem;
        font-weight: 300;
        margin-left: 0.5rem;
        cursor: pointer;
      }
      .pHome:hover {
        color: #ff6600;
      }
    }
    .middle {
      width: 22%;

      .logo {
        width: 3.2rem;
      }
    }
    .Ulright {
      width: 53%;
      height: 100%;
      justify-content: end;
      padding-right: 0.6rem;
      position: unset;
      .languageChoice {
        width: auto;
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .languageChoice:hover {
        color: #ff6600;
      }
      .contact {
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .contact:hover {
        color: #ff6600;
      }
      .signIn {
        margin-right: 0.5rem;
        p {
          font-size: 0.6rem;
        }

        .BoxSignIn {
          position: absolute;
          left: 0;
          height: 55vh;
          width: 100%;
          bottom: -55vh;
          background-color: #000000ec;
          padding: 1.5rem 1.2rem 0rem 1.2rem;
          .top {
            margin-bottom: 0.5rem;
            .title {
              font-size: 1rem;
              font-weight: 400;
            }
            .closeDiv {
              width: 1.35rem;
              height: 1.35rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              .iconClose {
                font-size: 1.25rem;
                color: white;
              }
              .iconClose:hover {
                color: #ff6600;
              }
            }
          }
          .mainPart {
            .topMainPart {
              font-size: 0.8rem;
              margin: 1rem 0;
            }
            form {
              display: flex;
              flex-direction: column;
              input {
                width: 100%;
                height: 2.5rem;
                font-size: 1rem;
                color: white;
                background-color: transparent;
                border: none;
                border-bottom: 0.5px solid white;
              }
              .inputEmail {
                margin-bottom: 1rem;
              }
              input:focus {
                outline: none;
                background-color: transparent;
              }
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                background-color: transparent;
              }
              input::placeholder {
                font-size: 0.9rem;
                color: #dadada;
              }
              input:focus::placeholder {
                opacity: 0;
              }
              .errorMEssageBox {
                height: 2rem;
                display: flex;
                align-items: center;

                p {
                  font-size: 0.7rem;
                  color: red;
                }
              }
              .btnContainer {
                position: relative;
                width: 5rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;

                .layOverbtn {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
              }
            }

            button {
              height: 1.6rem;
              background-color: transparent;
              border: 1px solid white;
              font-size: 0.8rem;
              color: white;

              cursor: pointer;
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;

            .pBottom {
              font-size: 0.8rem;
              margin-right: 0.4rem;
            }
            a {
              font-size: 0.9rem;
              font-weight: 500;
              color: red;
            }
          }
        }
      }
      .signIn:hover > p {
        color: #ff6600;
      }
      .SingOut {
        color: white;
        font-size: 0.5rem;
        cursor: pointer;
      }
      .SingOut:hover > p {
        color: #ff6600;
      }
      .userName {
        font-size: 0.5rem;
      }
      .bookBox {
        width: 2.5rem;
        height: 1.5rem;
        font-size: 0.5rem;
      }
      .bookBox:hover {
        border: 1px solid #ff6600;
        color: #ff6600;
      }
    }
  }
  @media only screen and (min-device-width: 501px) and (max-device-width: 700px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 5rem;
    position: relative;
    .left {
      width: 30%;

      ul {
        display: flex;
        align-items: center;
        padding-left: 0.8rem;
        li {
          margin-right: 0.5rem;
          .leftAsideMenu {
            position: absolute;
            width: 12rem;
            height: 90vh;
            background-color: #000000ec;
            bottom: -90vh;
            transition: 0.4s;
            ul {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: space-between;
              margin-top: 3rem;
              height: 10rem;
              padding: 0 0 0 0.5rem;
              .closeBtn {
                font-size: 1.2rem;
                color: white;
                display: block;
                position: absolute;
                right: 1rem;
                top: -2rem;
              }
              li {
                display: flex;
                align-items: center;
                justify-content: start;
                width: 100%;
                height: 3rem;
                color: white;
                font-size: 1.1rem;
                font-weight: 300;
                transition: 0.4s;
                cursor: pointer;
              }
              li:hover {
                color: #ff6600;
                transform: translateX(0.5rem);
              }
            }
          }
        }
      }

      .burger-menu {
        width: 17px;
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s;
        cursor: pointer;
        .line {
          height: 1px;
        }
      }

      .burger-menu:hover > .line {
        background-color: #ff6600;
      }

      .pHome {
        color: white;
        font-size: 0.8rem;
        font-weight: 300;
        margin-left: 0.5rem;
        cursor: pointer;
      }
      .pHome:hover {
        color: #ff6600;
      }
    }
    .middle {
      width: 30%;

      .logo {
        width: 3.2rem;
      }
    }
    .Ulright {
      width: 40%;
      height: 100%;
      justify-content: end;
      padding-right: 0.6rem;
      position: unset;
      .languageChoice {
        width: auto;
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .languageChoice:hover {
        color: #ff6600;
      }
      .contact {
        font-size: 0.6rem;
        margin-right: 0.5rem;
      }
      .contact:hover {
        color: #ff6600;
      }
      .signIn {
        margin-right: 0.5rem;
        p {
          font-size: 0.6rem;
        }

        .BoxSignIn {
          left: unset;
          right: 0;
          position: absolute;
          height: 20rem;
          width: 55%;
          bottom: -20rem;
          background-color: #000000ec;
          padding: 0.5rem 1rem 0rem 1rem;
          .top {
            margin-bottom: 1rem;
            .title {
              font-size: 0.9rem;
              font-weight: 400;
            }
            .closeDiv {
              width: 1.5rem;
              height: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              .iconClose {
                font-size: 1.2rem;
                color: white;
              }
              .iconClose:hover {
                color: #ff6600;
              }
            }
          }
          .mainPart {
            .topMainPart {
              font-size: 0.8rem;
              margin-bottom: 1rem;
            }
            form {
              display: flex;
              flex-direction: column;
              input {
                width: 100%;
                height: 2.5rem;
                font-size: 0.9rem;
                color: white;
                background-color: transparent;
                border: none;
                border-bottom: 0.5px solid white;
              }
              .inputEmail {
                margin-bottom: 1rem;
              }
              input:focus {
                outline: none;
                background-color: transparent;
              }
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                background-color: transparent;
              }
              input::placeholder {
                font-size: 0.8rem;
                color: #dadada;
              }
              input:focus::placeholder {
                opacity: 0;
              }
              .errorMEssageBox {
                height: 2rem;
                display: flex;
                align-items: center;

                p {
                  font-size: 0.8rem;
                  color: red;
                }
              }
              .btnContainer {
                position: relative;
                width: 5rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                .layOverbtn {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
              }
            }

            button {
              width: 5rem;
              height: 1.7rem;
              background-color: transparent;
              border: 1px solid white;
              color: white;
              font-size: 0.85rem;
              cursor: pointer;
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;
            .pBottom {
              font-size: 0.75rem;
              margin-right: 0.4rem;
            }
            a {
              font-size: 0.85rem;
              color: red;
            }
          }
        }
      }
      .signIn:hover > p {
        color: #ff6600;
      }
      .SingOut {
        color: white;
        font-size: 0.5rem;
        cursor: pointer;
      }
      .SingOut:hover > p {
        color: #ff6600;
      }
      .userName {
        font-size: 0.5rem;
      }
      .bookBox {
        width: 2.5rem;
        height: 1.5rem;
        font-size: 0.5rem;
      }
      .bookBox:hover {
        border: 1px solid #ff6600;
        color: #ff6600;
      }
    }
  }
  @media only screen and (min-device-width: 701px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 5rem;
    position: relative;
    .left {
      width: 30%;

      ul {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        li {
          margin-right: 0.5rem;
          .leftAsideMenu {
            position: absolute;
            width: 12rem;
            height: 90vh;
            background-color: #000000ec;
            bottom: -90vh;
            transition: 0.4s;
            ul {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: space-between;
              margin-top: 3rem;
              height: 10rem;
              padding: 0 0 0 0.5rem;
              .closeBtn {
                font-size: 1.2rem;
                color: white;
                display: block;
                position: absolute;
                right: 1rem;
                top: -2rem;
              }
              li {
                display: flex;
                align-items: center;
                justify-content: start;
                width: 100%;
                height: 3rem;
                color: white;
                font-size: 1.1rem;
                font-weight: 300;
                transition: 0.4s;
                cursor: pointer;
              }
              li:hover {
                color: #ff6600;
                transform: translateX(0.5rem);
              }
            }
          }
        }
      }

      .burger-menu {
        width: 20px;
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s;
        cursor: pointer;
        .line {
          height: 2px;
        }
      }
      .burger-menu:hover > .line {
        background-color: #ff6600;
      }

      .pHome {
        color: white;
        font-size: 0.8rem;
        font-weight: 300;
        margin-left: 0.5rem;
        cursor: pointer;
      }
      .pHome:hover {
        color: #ff6600;
      }
    }
    .middle {
      width: 30%;

      .logo {
        width: 3.6rem;
      }
    }
    .Ulright {
      position: unset;
      width: 40%;
      height: 100%;
      justify-content: end;
      padding-right: 0.6rem;

      .languageChoice {
        width: auto;
        font-size: 0.7rem;
        margin-right: 0.5rem;
      }
      .languageChoice:hover {
        color: #ff6600;
      }
      .contact {
        font-size: 0.7rem;
        margin-right: 0.5rem;
      }
      .contact:hover {
        color: #ff6600;
      }
      .signIn {
        margin-right: 0.5rem;
        p {
          font-size: 0.7rem;
        }

        .BoxSignIn {
          left: unset;
          right: 0;
          position: absolute;
          height: 20rem;
          width: 50%;
          bottom: -20rem;
          background-color: #000000ec;
          padding: 0.5rem 1rem 0rem 1rem;
          .top {
            margin-bottom: 1rem;
            .title {
              font-size: 0.95rem;
              font-weight: 400;
            }
            .closeDiv {
              width: 1.5rem;
              height: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              .iconClose {
                font-size: 1.2rem;
                color: white;
              }
              .iconClose:hover {
                color: #ff6600;
              }
            }
          }
          .mainPart {
            .topMainPart {
              font-size: 0.85rem;
              margin-bottom: 1rem;
            }
            form {
              display: flex;
              flex-direction: column;
              input {
                width: 100%;
                height: 2.5rem;
                font-size: 0.95rem;
                color: white;
                background-color: transparent;
                border: none;
                border-bottom: 0.5px solid white;
              }
              .inputEmail {
                margin-bottom: 1rem;
              }
              input:focus {
                outline: none;
                background-color: transparent;
              }
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                background-color: transparent;
              }
              input::placeholder {
                font-size: 0.85rem;
                color: #dadada;
              }
              input:focus::placeholder {
                opacity: 0;
              }
              .errorMEssageBox {
                height: 2rem;
                display: flex;
                align-items: center;

                p {
                  font-size: 0.8rem;
                  color: red;
                }
              }
              .btnContainer {
                position: relative;
                width: 5rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                .layOverbtn {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
              }
            }

            button {
              width: 5rem;
              height: 1.7rem;
              background-color: transparent;
              border: 1px solid white;
              color: white;
              font-size: 0.85rem;
              cursor: pointer;
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;
            .pBottom {
              font-size: 0.8rem;
              margin-right: 0.4rem;
            }
            a {
              font-size: 0.9rem;
              color: red;
            }
          }
        }
      }
      .signIn:hover > p {
        color: #ff6600;
      }
      .SingOut {
        color: white;
        font-size: 0.5rem;
        cursor: pointer;
      }
      .SingOut:hover > p {
        color: #ff6600;
      }
      .userName {
        font-size: 0.5rem;
      }
      .bookBox {
        width: 2.5rem;
        height: 1.5rem;
        font-size: 0.5rem;
      }
      .bookBox:hover {
        border: 1px solid #ff6600;
        color: #ff6600;
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 5rem;
    position: relative;
    .left {
      ul {
        li {
          .leftAsideMenu {
            ul {
              .closeBtn {
                font-size: 1.2rem;
                color: white;
                display: block;
                position: absolute;
                right: 1rem;
                top: -2rem;
              }
            }
          }
        }
      }
    }

    .Ulright {
      position: unset;

      .signIn {
        margin-right: 0.5rem;
        p {
          font-size: 0.7rem;
        }

        .BoxSignIn {
          left: unset;
          right: 0;
          position: absolute;
          height: 20rem;
          width: 35%;
          bottom: -20rem;
          background-color: #000000ec;
          padding: 1rem 2rem 0rem 2rem;
          .top {
            margin-bottom: 1rem;
            .title {
              font-size: 0.95rem;
              font-weight: 400;
            }
            .closeDiv {
              width: 1.5rem;
              height: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              .iconClose {
                font-size: 1.2rem;
                color: white;
              }
              .iconClose:hover {
                color: #ff6600;
              }
            }
          }
          .mainPart {
            .topMainPart {
              font-size: 0.85rem;
              margin-bottom: 1rem;
            }
            form {
              display: flex;
              flex-direction: column;
              input {
                width: 100%;
                height: 2.5rem;
                font-size: 0.95rem;
                color: white;
                background-color: transparent;
                border: none;
                border-bottom: 0.5px solid white;
              }
              .inputEmail {
                margin-bottom: 1rem;
              }
              input:focus {
                outline: none;
                background-color: transparent;
              }
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                background-color: transparent;
              }
              input::placeholder {
                font-size: 0.85rem;
                color: #dadada;
              }
              input:focus::placeholder {
                opacity: 0;
              }
              .errorMEssageBox {
                height: 2rem;
                display: flex;
                align-items: center;

                p {
                  font-size: 0.8rem;
                  color: red;
                }
              }
              .btnContainer {
                position: relative;
                width: 5rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                .layOverbtn {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
              }
            }

            button {
              width: 5rem;
              height: 1.7rem;
              background-color: transparent;
              border: 1px solid white;
              color: white;
              font-size: 0.85rem;
              cursor: pointer;
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;
            .pBottom {
              font-size: 0.8rem;
              margin-right: 0.4rem;
            }
            a {
              font-size: 0.9rem;
              color: red;
            }
          }
        }
      }
      .signIn:hover > p {
        color: #ff6600;
      }
      .SingOut {
        color: white;
        font-size: 0.5rem;
        cursor: pointer;
      }
      .SingOut:hover > p {
        color: #ff6600;
      }
      .userName {
        font-size: 0.5rem;
      }
      .bookBox {
        width: 2.5rem;
        height: 1.5rem;
        font-size: 0.5rem;
      }
      .bookBox:hover {
        border: 1px solid #ff6600;
        color: #ff6600;
      }
    }
  }
`;
export default NavBar;

import styled from "styled-components";
import { useUserAuth } from "../../context/userAuthContext";
import { languageUserAuth } from "../../context/LanguageContext";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { Link } from "react-router-dom";
import overview2 from "../../images/backGround/overview2.webp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [sobreNome, setSobreNome] = useState("");

  // const [errorMessage, setErrorMessage] = useState("");
  const { signUp } = useUserAuth();

  // let { errorSignUp } = useUserAuth();

  const { portugues } = languageUserAuth();
  // console.log(portugues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === confirmEmail && password === confirmPassword) await signUp(name, sobreNome, email, password);
    } catch (error) {
      // setErrorMessage(error.message, "BIG ERROR CATCHED");
      console.error("Error signing in: ", error.message, errorMessage);
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <Wrapper>
      <header>
        <NavBar />
      </header>

      <div className="blanckSpace"></div>
      <main style={{ display: `${portugues ? "none" : "flex"}` }}>
        <h4>Sign-up</h4>
        <Link to={"/rooms"}>Rooms</Link>
        <form id="formSingUp" onSubmit={handleSubmit}>
          <h5>Informações para cadastro</h5>
          <div className="topcontainer">
            <div className="inputInnerSection">
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="text"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Primeiro nome "
                />
              </div>
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="text"
                  id="sobrenome"
                  required
                  onChange={(e) => setSobreNome(e.target.value)}
                  value={sobreNome}
                  placeholder="Sobrenome "
                />
              </div>
            </div>

            <div className="inputInnerSection">
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email "
                />
              </div>
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="email"
                  id="confirmEmail"
                  required
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  value={confirmEmail}
                  placeholder="Confirmar email "
                />
              </div>
            </div>

            <div className="inputInnerSection">
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password "
                />
              </div>
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="password"
                  id="confirmPassword"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirmar password "
                />
              </div>
            </div>
          </div>
          {/* <div className="errorMessageContainerSignUp" style={{ display: errorSignUp ? "block" : " none" }}>
            <p className="errorMessageSignUp">At least one of the fields is wrong.</p>
          </div> */}
          <div className="btnContainer">
            <button>Sign Up</button>
          </div>
        </form>
      </main>
      <main style={{ display: `${portugues ? "flex" : "none"}` }}>
        <h4>Sign-up</h4>
        <Link to={"/rooms"}>Rooms</Link>
        <form id="formSingUp" onSubmit={handleSubmit}>
          <h5>Profile informations</h5>
          <div className="topcontainer">
            <div className="inputInnerSection">
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="text"
                  id="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="First name"
                />
              </div>
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="text"
                  id="sobrenome"
                  required
                  onChange={(e) => setSobreNome(e.target.value)}
                  value={sobreNome}
                  placeholder="family name"
                />
              </div>
            </div>

            <div className="inputInnerSection">
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email "
                />
              </div>

              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="email"
                  id="confirmEmail"
                  required
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  value={confirmEmail}
                  placeholder="Confirm email "
                />
              </div>
            </div>

            <div className="inputInnerSection">
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password "
                />
              </div>
              <div className="fieldHolder">
                <input
                  className="inputRegister"
                  type="password"
                  id="confirmPassword"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirm password "
                />
              </div>
            </div>
          </div>
          {/* <div className="errorMessageContainerSignUp" style={{ display: errorSignUp ? "block" : " none" }}>
            <p className="errorMessageSignUp">At least one of the fields is wrong.</p>
          </div> */}
          <div className="btnContainer">
            <button>Sign Up</button>
          </div>
        </form>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-image: url(${overview2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  .blanckSpace {
    width: 100%;
    height: 6rem;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      color: white;
      margin-bottom: 1.5rem;
    }

    #formSingUp {
      padding: 2rem 3rem;
      width: 70%;
      background-color: #010000c9;
      border-radius: 1rem;
      h5 {
        font-size: 1.4rem;
        font-weight: 400;
        color: white;
        margin-bottom: 1.5rem;
      }
      .topcontainer {
        .inputInnerSection {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .fieldHolder {
          position: relative;
          margin-bottom: 2.5rem;
          border-bottom: 0.5px solid white;
          width: 47%;
          .inputRegister {
            background-color: transparent;
            position: relative;
            width: 100%;
            font-size: 1.2rem;
            color: white;
            padding-bottom: 0.3rem;
            outline: none !important;
            border: 0;
          }
          .inputRegister::placeholder {
            color: white;
            font-size: 1rem;
          }
          .inputRegister:focus::placeholder {
            opacity: 0;
          }
        }
      }
      .btnContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.5rem;
        button {
          width: 8rem;
          height: 2.8rem;
          border: 1px solid white;
          background-color: transparent;
          color: white;
          font-size: 1rem;
          border-radius: 1rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #ffffff59;
          font-size: 1.2rem;
        }
      }
    }
  }

  /* 
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 100vw;
      height: 100%;
      padding: 0 0.6rem;

      h4 {
        font-size: 0.8rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.7rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 1rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid gray;
          width: 95vw;

          .inputRegister {
            position: relative;
            width: 100%;
            outline: none !important;
            border: 0;
            font-size: 0.7rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }

        .subscribeContainer {
          margin-top: 0rem;
          width: 100%;
          height: 4rem;

          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.8rem;
            height: 1rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;

            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 0.7rem;
            color: #393737;
            font-weight: 400;
            height: fit-content;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 0.7rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 3rem;

          button {
            width: 6rem;
            height: 2rem;
            margin-bottom: 0.6rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 100vw;
      height: 100%;
      padding: 0 0.6rem;

      h4 {
        font-size: 1rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 2rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid gray;
          width: 95vw;

          .inputRegister {
            position: relative;
            width: 100%;
            outline: none !important;
            border: 0;
            font-size: 1.2rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }

        .subscribeContainer {
          margin-top: 0rem;
          width: 100%;
          height: 4rem;

          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.8rem;
            height: 1.2rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;

            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 0.8rem;
            color: #393737;
            font-weight: 400;
            height: fit-content;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 1rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 0.5rem;

          button {
            width: 8rem;
            height: 2.5rem;
            margin-bottom: 0.8rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin: 0;
      margin-top: 1rem;
      padding: 0 1.5rem;

      h4 {
        font-size: 1.1rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.3rem;
      }
      p {
        font-size: 0.9rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 1.5rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid gray;
          width: 100%;

          .inputRegister {
            border: 0;
            font-size: 1.2rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.9rem;
          }
        }
        .subscribeContainer {
          display: flex;
          justify-content: space-between;
          margin-top: 0rem;
          width: 100%;
          height: 4.2rem;

          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.4rem;
            height: 1.2rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;
            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 0.9rem;
            color: #393737;
            font-weight: 400;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 0.3rem;
          margin-bottom: 0.5rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 1rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 0.5rem;

          button {
            width: 8rem;
            height: 2.5rem;
            margin-bottom: 0.8rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin: 0;
      margin-top: 1rem;
      width: null;
      height: 100%;
      padding: 0 1.5rem;

      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.3rem;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 1.4rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid gray;
          width: 100%;
          .inputRegister {
            position: relative;
            width: 100%;
            outline: none !important;
            border: 0;
            font-size: 1.1rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.9rem;
          }
        }
        .subscribeContainer {
          display: flex;
          justify-content: space-between;
          margin-top: 0rem;
          width: 100%;
          height: 3.5rem;
          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 1.2rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;
            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 1rem;
            color: #393737;
            font-weight: 400;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 0rem;
          margin-bottom: 0.2rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 1rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 0.9rem;

          button {
            width: 11rem;
            height: 3rem;
            margin-bottom: 0.8rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1.1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  } */
`;
export default SignUp;

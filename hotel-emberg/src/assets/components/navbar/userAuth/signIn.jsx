import styled from "styled-components";
import { useState } from "react";
import { useUserAuth } from "../../../context/userAuthContext";
import NavBar from "../NavBar";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signIn, errorSignIn } = useUserAuth(); //to do login and show error message in case the login is wrong.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error signing in: ", error.message, errorMessage);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Wrapper>
      <NavBar />
      <div className="innerUserContainer">
        <h4>Log in to your On account</h4>
        <p className="pInnercontainer">For faster checkout, managing orders and account-only exclusives.</p>
        <form onSubmit={handleSubmit}>
          <div className="fildeHolder">
            <input className="inputRegister" type="email" id="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor="email">Email *</label>
          </div>
          <div className="fildeHolder">
            <input className="inputRegister" type="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
            <label htmlFor="password"> Password *</label>
          </div>
          <div className="errorMessageContainer">
            <p className="errorMessageSignIn" style={{ display: errorSignIn ? "block" : " none" }}>
              Email ou password está errado.
            </p>
          </div>
          <div className="btnContainer">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 2.7rem;
    font-weight: 500;
    color: #302f2f;
    margin-bottom: 2rem;
  }
  .pInnercontainer {
    font-size: 1.75rem;
    font-weight: 400;
    color: #302f2f;
    margin-bottom: 3rem;
  }
  .fildeHolder {
    position: relative;
    margin-bottom: 3rem;
    border-bottom: 1px solid gray;
    width: 50rem;

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
        bottom: 2rem;
      }
    }
    label {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .subscribeContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    .subscribeCheckbox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.9rem;
      height: 1.8rem;
      border: 2px solid gray;
      border-radius: 0.3rem;
      margin-right: 1rem;
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
      font-size: 1.4rem;
      color: #393737;
      font-weight: 400;
    }
  }
  .btnContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      width: 35rem;
      height: 4rem;
      border: none;
      background-color: black;
      color: white;
      font-size: 1.1rem;
      border-radius: 3rem;
      cursor: pointer;
    }
  }
  .errorMessageContainer {
    margin-bottom: 1rem;
    .errorMessageSignIn {
      color: #ce0303;
      font-size: 0.7rem;
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    .innerUserContainer {
      width: 100vw;
      padding: 0 0.2rem;
      h4 {
        font-size: 0.9rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.5rem;
      }
      .pInnercontainer {
        font-size: 0.8rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 2rem;
      }
      .fildeHolder {
        position: relative;
        margin-bottom: 2rem;
        border-bottom: 1px solid gray;
        width: 100%;
        .inputRegister {
          position: relative;
          width: 100%;
          outline: none !important;
          border: 0;
          font-size: 1rem;
          &:focus ~ label,
          &:valid ~ label {
            position: absolute;
            left: 0;
            bottom: 2rem;
          }
        }
        label {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 0.9rem;
        }
      }

      .btnContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        button {
          width: 60%;
          height: 2.5rem;
          margin-bottom: 0.6rem;
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
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    .innerUserContainer {
      width: 100vw;
      padding: 0 0.6rem;
      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 1rem;
      }
      .pInnercontainer {
        font-size: 1.1rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 2rem;
      }
      .fildeHolder {
        position: relative;
        margin-bottom: 2rem;
        border-bottom: 1px solid gray;
        width: 30rem;
        .inputRegister {
          position: relative;
          width: 100%;
          outline: none !important;
          border: 0;
          font-size: 1.6rem;
          &:focus ~ label,
          &:valid ~ label {
            position: absolute;
            left: 0;
            bottom: 2rem;
          }
        }
        label {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }

      .btnContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        button {
          width: 15rem;
          height: 3.2rem;
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
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 0 1.5rem;
    .innerUserContainer {
      width: 100%;
      padding: 0rem;
      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 1rem;
      }
      .pInnercontainer {
        font-size: 1.2rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 3rem;
      }
      .fildeHolder {
        position: relative;
        margin-bottom: 2rem;
        border-bottom: 1px solid gray;
        width: 100%;
        .inputRegister {
          position: relative;
          width: 100%;
          outline: none !important;
          border: 0;
          font-size: 1.4rem;
          &:focus ~ label,
          &:valid ~ label {
            position: absolute;
            left: 0;
            bottom: 2rem;
          }
        }
        label {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }

      .btnContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.4rem;

        button {
          width: 15rem;
          height: 3.2rem;
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

  @media only screen and (min-device-width: 901px) and (max-device-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 0 2rem;
    .innerUserContainer {
      width: 100%;
      padding: 0rem;
      h4 {
        font-size: 1.4rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 1rem;
      }
      .pInnercontainer {
        font-size: 1.3rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 3rem;
      }
      .fildeHolder {
        position: relative;
        margin-bottom: 2rem;
        border-bottom: 1px solid gray;
        width: 100%;
        .inputRegister {
          position: relative;
          width: 100%;
          outline: none !important;
          border: 0;
          font-size: 1.4rem;
          &:focus ~ label,
          &:valid ~ label {
            position: absolute;
            left: 0;
            bottom: 2rem;
          }
        }
        label {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 1.2rem;
        }
      }

      .btnContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.4rem;

        button {
          width: 15rem;
          height: 3.2rem;
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
`;

export default Login;

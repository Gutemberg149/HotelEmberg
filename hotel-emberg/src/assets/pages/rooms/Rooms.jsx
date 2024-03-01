import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styled from "styled-components";
import room01 from "../../../assets/images/rooms/room02.jpeg";
function Rooms() {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  background-image: url(${room01});
  background-size: cover;
`;

export default Rooms;

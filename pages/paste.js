import Head from "next/head";
import Navbar from "../components/navbar";
import { Container, useColorModeValue } from "@chakra-ui/react";
import Interweave from 'interweave';

const Paste = ({data}) => {

  // console.log(data)
  return (
    <>
      <Navbar />
      <Container
        color={useColorModeValue("black", "white")}
        mt={"2.5rem"}
        maxW={"60rem"}
        minH={"fit-content"}
        padding={'10px'}
        borderRadius={"4px"}
        border={"2px"}
        borderStyle={"solid"}
        boxShadow={useColorModeValue("8px 8px black", "8px 8px white")}
        overflow={"auto"}
      >
      <Interweave content={data} />
        {data}
      </Container>
    </>
  );
};

Paste.getInitialProps = async (paste) => {
  const json = paste.query.data.body;
  return{data: json}
}

export default Paste;
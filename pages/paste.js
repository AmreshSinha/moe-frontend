import Head from "next/head";
import Navbar from "../components/navbar";
import { Container, useColorModeValue } from "@chakra-ui/react";
import Interweave from 'interweave';

const Paste = ({data}) => {

  // console.log(data)
  return (
    <>
    <Head>
      <title>{data.name}</title>
    </Head>
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
      <Interweave content={data.body} />
      </Container>
    </>
  );
};

Paste.getInitialProps = async (paste) => {
  const body = paste.query.data.body;
  const name = paste.query.data.name;
  return{data: {name: name, body: body} }
}

export default Paste;
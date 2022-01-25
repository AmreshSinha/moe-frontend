import Head from "next/head";
import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Paste.module.css";
import { Text, Flex, Container, IconButton, useColorModeValue } from "@chakra-ui/react";
import Interweave from "interweave";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";

const Paste = ({ data }) => {
  let url;

  if (data.port == (80 || 443)) {
    url = `http://${data.hostname}/${data.id}`;
  } else {
    url = `http://${data.hostname}:${data.port}/${data.id}`;
  }

  // console.log(url)

  const [copySuccess, setCopySuccess] = useState("");

  //   const handleCopyText = (e) => {
  //      setCopyText(currentURL);
  //   }

  //   const copyToClipboard = () => {
  //      copy(copyText);
  //   }

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

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
        padding={"10px"}
        borderRadius={"4px"}
        border={"2px"}
        borderStyle={"solid"}
        boxShadow={useColorModeValue("8px 8px black", "8px 8px white")}
        overflow={"auto"}
      >
        <Flex borderBottom={'2px'} paddingY={'5px'} justifyContent={'space-between'} align={'center'}>
          <Text fontSize={'2rem'} fontFamily={'Dongle'}>{data.name}</Text>
          <IconButton
            icon={<BsClipboard />}
            onClick={() => copyToClipBoard(url)}
            color={useColorModeValue("gray.600", "white")}
            opacity={"40%"}
            _hover={{
              opacity: "100%",
              color: useColorModeValue("gray.600", "white"),
              backgroundColor: useColorModeValue(
                "0.5% gray.200",
                "0.5% gray.600"
              ),
            }}
          />
        </Flex>
        <Interweave className={styles.interweave} content={data.body} />
      </Container>
    </>
  );
};

Paste.getInitialProps = async (paste) => {
  const body = paste.query.data.body;
  const name = paste.query.data.name;
  const hostname = paste.query.hostname;
  const port = paste.query.port;
  return {
    data: {
      name: name,
      body: body,
      hostname: hostname,
      port: port,
      id: paste.query.data._id,
    },
  };
};

export default Paste;

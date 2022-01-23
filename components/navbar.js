import {
  Link,
  Text,
  Flex,
  Box,
  Container,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/bs";
import Moon from "../public/moon.png";
import Sun from "../public/sun.png";
import Rocket from "../public/icons8-rocket-96.png";

const FaMoonYellow = () => {
  return <Image src={Moon} width="24px" height="24px" />;
};

const FaSunYellow = () => {
  return <Image src={Sun} width="24px" height="24px" />;
};

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoonYellow, FaSunYellow);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
      // borderBottom={1}
      // boxShadow={"0 0.1px 2px 0 rgba(0,0,0,0.15)"}
      // borderStyle={"solid"}
      // borderColor={useColorModeValue("gray.100", "gray.900")}
      >
        {/* Main Navbar */}
        <Flex
          margin={"0 auto"}
          color={useColorModeValue("gray.600", "white")}
          height={"4.5rem"}
          maxW={"60rem"}
          px={{ base: 4 }}
          align={"center"}
          borderWidth={"0 2px 2px 2px"}
          boxShadow={useColorModeValue("8px 8px black", "8px 8px white")}
          borderRadius={"0 4px 4px 4px"}
          borderStyle={"solid"}
          borderColor={useColorModeValue("black", "white")}
        >
          {/* First Part of Navbar => LOGO + TEXT */}
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "left", md: "start" }}
            height={"fit-content"}
          >
            {/* <Flex
              display={useBreakpointValue({ base: "none", md: "block" })}
              justifyContent={"center"}
            > */}
            {/* <Image src={Rocket} width="10px" height="10px" /> */}
            {/* </Flex> */}
            <Link
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontSize={"3rem"}
              paddingX={2}
              paddingY={2}
              rounded={5}
              lineHeight={0.5}
              fontFamily={"Dongle"}
              color={useColorModeValue("gray.700", "white")}
              href="/"
              _hover={{
                backgroundColor: useColorModeValue("gray.100", "gray.700")
              }}
            >
              moe
            </Link>
          </Flex>

          {/* Second Part => Lightmode/Darkmode Toggle Button */}
          <IconButton
            size="md"
            variant="ghost"
            color="current"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
          />
        </Flex>
      </Box>
    </>
  );
}

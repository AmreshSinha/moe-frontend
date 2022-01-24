import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  Container,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";

if (typeof window !== "undefined") {
  require("tinymce/tinymce");
  require("tinymce/icons/default");
  require("tinymce/themes/silver");
  require("tinymce/plugins/paste");
  require("tinymce/plugins/link");
  require("tinymce/plugins/image");
  require("tinymce/plugins/table");
  require("tinymce/plugins/fullscreen");
  require("tinymce/plugins/help");
  require("tinymce/plugins/media");
  require("tinymce/plugins/codesample");
  require("tinymce/plugins/wordcount");
  // require("tinymce/skins/ui/oxide/skin.min.css");
  // require("tinymce/skins/ui/oxide/content.min.css");
  require("tinymce/skins/ui/oxide-dark/skin.min.css");
  require("tinymce/skins/ui/oxide-dark/content.min.css");
  require("tinymce/skins/content/default/content.min.css");
  require("tinymce/skins/content/dark/content.min.css");
}
import { Editor } from "@tinymce/tinymce-react";

export default function Home() {
  const [contentEditor, setContentEditor] = useState("");
  const handleEditorChange = (content, editor) => {
    setContentEditor(content);
  };

  // For making Name/Title change to Name when viewport size decreases
  const [isDesktop, setDesktop] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1012) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
    const updateMedia = () => {
      if (window.innerWidth > 1012) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // Name Input Box
  const [input, setInput] = useState("");

  return (
    <>
      <Head>
        <title>Moe - Just Another Paste Service!</title>
        <meta name="title" content="Moe - Just Another Paste Service!" />
        <meta name="description" content="Moe is a Paste Service build on Next.js, Express and Chakra UI" />
        <meta name="keywords" content="Paste, Pastebin" />
        <meta name="author" content="Amresh Sinha" />
        <link rel="shortcut icon" href="images/favicon.ico" />

        {/* Open Graph Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://paste.fossian.com/"></meta>
        <meta property="og:title" content="Moe - Just Another Paste Service!"></meta>
        <meta property="og:description" content="Moe - Just Another Paste Service!" key="title" />
        <meta propert="og:image" content="/images/Logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://paste.fossian.com/"></meta>
        <meta property="twitter:title" content="Moe - Just Another Paste Service!"></meta>
        <meta property="twitter:description" content="Moe - Just Another Paste Service!" key="title" />
        <meta propert="twitter:image" content="/images/Logo.png" />
      </Head>
      <Navbar />
      <form action="/upload/paste" method="post">
        <Container
          color={useColorModeValue("black", "white")}
          mt={"2.5rem"}
          maxW={"60rem"}
          minH={"fit-content"}
          padding={0}
          borderRadius={"4px"}
          border={"2px"}
          borderStyle={"solid"}
          boxShadow={useColorModeValue("8px 8px black", "8px 8px white")}
          overflow={"auto"}
        >
          <Editor
            init={{
              skin: false,
              content_css: false,
              height: "30rem",
              menubar: false,
              fullscreen_native: true,
              plugins: [
                "codesample",
                "link image media",
                "table paste",
                "help",
                "fullscreen",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor codesample | \
             alignleft aligncenter alignright alignjustify | link image media | \
             bullist numlist outdent indent | removeformat | fullscreen | help",
            }}
            value={contentEditor}
            onEditorChange={handleEditorChange}
          />
          <Textarea
            display="none"
            id="body"
            name="body"
            value={contentEditor}
            readOnly
          />
        </Container>
        <Container
          mt={"2.5rem"}
          borderRadius={"4px"}
          border={"2px"}
          borderStyle={"solid"}
          boxShadow={useColorModeValue("8px 8px black", "8px 8px white")}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            height={"4rem"}
          >
            {isDesktop ? (
              <Text px={5} fontFamily={"Dongle"} fontSize={"2.5rem"}>
                Name/Title:
              </Text>
            ) : (
              <Text px={5} fontFamily={"Dongle"} fontSize={"2.5rem"}>
                Name:
              </Text>
            )}
            <Container flexGrow={4}>
              <Input
                fontFamily={"Dongle"}
                fontSize={"2.4rem"}
                variant="flushed"
                _focus={{
                  borderColor: "black",
                  borderWidth: "0 2px 2px 0",
                  boxShadow: useColorModeValue(
                    "5px 5px black",
                    "5px 5px white"
                  ),
                }}
                id="name"
                name="name"
                onInput={(e) => setInput(e.target.value)}
              />
            </Container>
          </Flex>
        </Container>
        <Container
          mt={"2.5rem"}
          mb={"2.5rem"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            borderRadius={"4px"}
            backgroundColor={useColorModeValue("white", "black")}
            color={useColorModeValue("black", "white")}
            border={"2px"}
            borderStyle={"solid"}
            boxShadow={useColorModeValue("5px 5px black", "5px 5px white")}
            fontWeight={400}
            _hover={{ boxShadow: "none" }}
            _focus={{
              boxShadow: useColorModeValue("5px 5px black", "5px 5px white"),
            }}
            _active={{
              bg: useColorModeValue("black", "white"),
              color: useColorModeValue("white", "black"),
            }}
            disabled={!input || !contentEditor}
            type="submit"
            value="submit"
          >
            Paste
          </Button>
        </Container>
      </form>
    </>
  );
}

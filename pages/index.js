import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import { useState } from "react";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";
import { Button, Container, useColorModeValue } from "@chakra-ui/react";

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
  // require("tinymce/skins/ui/oxide/skin.min.css");
  // require("tinymce/skins/ui/oxide/content.min.css");
  require("tinymce/skins/ui/oxide-dark/skin.min.css");
  require("tinymce/skins/ui/oxide-dark/content.min.css");
  require("tinymce/skins/content/default/content.min.css");
  require("tinymce/skins/content/dark/content.min.css");
}
import { Editor } from "@tinymce/tinymce-react";

// const modules = {
//   toolbar: [
//     [{ font: [] }],
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ color: [] }, { background: [] }],
//     [{ script: "sub" }, { script: "super" }],
//     ["blockquote", "code-block"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
//     ["link"],
//     ["clean"],
//   ],
// };

export default function Home() {
  // const [value, setValue] = useState("");
  const [contentEditor, setContentEditor] = useState();
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setContentEditor(content);
  };

  return (
    <>
      <Navbar />
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
        // className={styles.quill}
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
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor codesample | \
             alignleft aligncenter alignright alignjustify | link image media | \
             bullist numlist outdent indent | removeformat | fullscreen | help",
          }}
          value={contentEditor}
          onEditorChange={handleEditorChange}
        />
      </Container>
      <Container mt={"2.5rem"} display={"flex"} justifyContent={"center"}>
        <Button
          borderRadius={"4px"}
          // rounded={"0"}
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
        >
          Paste
        </Button>
      </Container>
      {/* {value} */}
    </>
  );
}

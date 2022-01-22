import { fetchPaste, uploadPaste } from "../lib/api";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {bg: "#EEEEEE"}
//     }
//   }
// })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

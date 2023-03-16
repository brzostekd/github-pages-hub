import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {
  Box,
  Center,
  ChakraBaseProvider,
  extendTheme,
  Flex,
  VStack,
} from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: {
    "3xs": "0.65rem",
    "2xs": "0.825rem",
    xs: "0.95rem",
    sm: "1.1rem",
    md: "1.15rem",
    lg: "1.2rem",
    xl: "1.31rem",
    "2xl": "1.7rem",
    "3xl": "2.075rem",
    "4xl": "2.45rem",
    "5xl": "3.2rem",
    "6xl": "4rem",
    "7xl": "4.8rem",
    "8xl": "6.4rem",
    "9xl": "8.4rem",
  },

  fontWeights: {
    hairline: 200,
    thin: 300,
    light: 400,
    normal: 500,
    medium: 600,
    semibold: 700,
    bold: 800,
    extrabold: 900,
    black: 1000,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <Flex
        backgroundColor={"gray.200"}
        direction={"column"}
        maxW={"100vw"}
        minH={"100vh"}
        overflow="hidden"
        sx={{
          "*::-webkit-scrollbar": {
            width: "0.5rem",
            height: "0.5rem",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "gray.500",
            borderRadius: "full",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "gray.400",
          },
          "*::-webkit-scrollbar-corner": {
            display: "none",
          },
        }}
      >
        <App />
      </Flex>
    </ChakraBaseProvider>
  </React.StrictMode>
);

reportWebVitals();

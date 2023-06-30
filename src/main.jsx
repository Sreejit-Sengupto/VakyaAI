import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import App from "./App";
import "./index.css";


const colors = {
  body: {
    bg: '#212A3E',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

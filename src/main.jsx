import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import AdminContextProvider from "./context/isAdmin.jsx";
import IsLoginContextProvider from "./context/isLogin.jsx"; // Renamed to follow convention
import Dropdown from "./components/dropdown.jsx"; // Ensured consistent naming convention
import { ChakraProvider } from '@chakra-ui/react';
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <IsLoginContextProvider>
        <AdminContextProvider>
          <BrowserRouter>
            <Navbar />
            <Dropdown />
            <App />
          </BrowserRouter>
        </AdminContextProvider>
      </IsLoginContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./SimpleStateManagement/Exercise2/App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ShoppingCart from "./SimpleStateManagement/Exercise1/ShoppingCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>

);

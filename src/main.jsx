import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import App from "./Tweeter2.0/App.jsx";
import "./Tweeter2.0/App.css"
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ShoppingCart from "./SimpleStateManagement/Exercise1/ShoppingCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <TweetsProvider>
        <App />
      </TweetsProvider>
    </MantineProvider>
  </StrictMode>

);

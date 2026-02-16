import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./Layout";

export default function App() {
    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    );
}

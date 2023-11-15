import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import AuthProvider from "./Context/AuthContext";
import { Notifications } from "@mantine/notifications";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  /** Put your mantine theme override here */
});

root.render(
  <React.StrictMode>
    <AuthProvider>
      <MantineProvider>
        <Notifications
          style={{
            position: "absolute",
            top: "700px",
            right: "50px",
          }}
        />
        <App />
      </MantineProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { MaterialUIContext } from "./contexts";
import { PomodoroScreen } from "./index.ts";
import "./assets/fonts.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MaterialUIContext>
      <PomodoroScreen />
    </MaterialUIContext>
  </React.StrictMode>
);

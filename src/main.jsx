import React from "react";
import ReactDOM from "react-dom/client";
import { Input } from "./components/input.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Input label="Test123" id="name" />
  </React.StrictMode>
);

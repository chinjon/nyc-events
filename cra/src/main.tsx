import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.tsx'
import './reset.css'
import './minimal.css'

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
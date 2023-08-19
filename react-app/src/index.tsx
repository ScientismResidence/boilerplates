import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./app"

import "./app.css"

const root = createRoot(document.getElementById('app') as Element)
root.render(<App />);
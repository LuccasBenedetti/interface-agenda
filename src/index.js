import React from "react";
import {createRoot} from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css';
import App from "./Components/App";

createRoot(document.getElementById('root')).render(<App />);

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import ThemeContextProvider from "./contexts/ThemeContextProvider.jsx";
// import CartContextProvider from "./contexts/CartContextProvider.jsx";

import "react-lazy-load-image-component/src/effects/blur.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <ThemeContextProvider>
          <App />
      </ThemeContextProvider>
    </Suspense>
  </React.StrictMode>
);

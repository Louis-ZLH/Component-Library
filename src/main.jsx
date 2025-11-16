import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "@fontsource/poppins";
import "@fontsource-variable/inter/opsz-italic.css";
import "@fontsource-variable/quicksand";
import "@fontsource-variable/mulish";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "./main.css";
// prism-okaidia.css

// prism-coy.css

// prism-funky.css

// prism-dark.css

// prism-solarizedlight.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

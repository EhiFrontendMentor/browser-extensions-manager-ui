import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { sel } from "./js/custom.js";
import Header from "./components/Header.jsx";
import Grid from "./components/Grid.jsx";
import { ExtensionsProvider } from "./context/ExtensionsContext.jsx";
import "./scss/components/Attribution.scss";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Ehi Ejakhian | Browser Extensions Manager</title>
        <link rel="icon" href="src/assets/images/favicon-32x32.png" sizes="32x32" type="image/png"/>
      </Helmet>
      <ExtensionsProvider>
        <Header></Header>
        <Grid></Grid>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://ehiejakhian.github.io/">Ehi Ejakhian</a>.
        </div>
      </ExtensionsProvider>
    </>
  )
}


createRoot(sel('#root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
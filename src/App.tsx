import "./App.css";

import HomeHero from "./components/HomeHero";
import ThumbnailGrid from "./components/ThumbnailGrid";
import AppHeader from "./components/Header";

function App() {
  return (
    <>
      <AppHeader />

      <HomeHero />

      <ThumbnailGrid />
    </>
  );
}

export default App;

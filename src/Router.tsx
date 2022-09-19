import "./App.css";
import { Navbar } from "./components/shared/navbar/Navbar";
import { Home } from "./components/home/Home";
import { EpisodesList } from "./components/episode-list/EpisodesList";
import { Footer } from "./components/shared/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { ApiDetails } from "./components/api-details/ApiDetails";
import { CharacterProvider } from "./components/context/CharacterProvider";

export default function App() {

  return (
    <CharacterProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/api-details/:id" element={<ApiDetails />} />
      </Routes>
      <Footer />
    </CharacterProvider>
  );
}

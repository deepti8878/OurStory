import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import BeforeWeStart from "./pages/BeforeWeStart";
import OurStory from "./pages/OurStory";
import LastFewMonths from "./pages/LastFewMonths";
import Complaints from "./pages/Complaints";
import WhatINeverSaid from "./pages/WhatINeverSaid";
import FinalMessage from "./pages/FinalMessage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/before-we-start" element={<BeforeWeStart />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/last-few-months" element={<LastFewMonths />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/what-i-never-said" element={<WhatINeverSaid />} />
        <Route path="/final-message" element={<FinalMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
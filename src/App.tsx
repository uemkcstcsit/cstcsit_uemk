import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import FDP from "./pages/FDP";
import ConferenceOrganised from "./pages/ConferenceOrganised";
import NotFound from "./pages/NotFound";
import Magazine from "./pages/Magazine";
import Newsletter from "./pages/Newsletter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<FDP />} />
        <Route path="/conference-organised" element={<ConferenceOrganised />} />
        <Route path="/events/:year" element={<Events />} />

        {/* REQUIRED */}
        <Route path="/magazine/:edition" element={<Magazine />} />

        <Route path="/newsletter" element={<Newsletter />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
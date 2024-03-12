import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./data/data.json";

import { destinations } from "./data/data.json";
import { crew } from "./data/data.json";
import { technology } from "./data/data.json";

import NavigationBar from "./NavigationBar";

import Home from "./pages/Home";
import Crew from "./pages/Crew";
import { Destination } from "./pages/Destination";
import Technologies from "./pages/Technologies";

import NotFound from "./pages/NotFound";

function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={"app " + location}>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destination"
          element={<Destination data={destinations} />}
        />

        <Route
          path="/technology"
          element={<Technologies data={technology} />}
        />

        <Route path="/crew" element={<Crew data={crew} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

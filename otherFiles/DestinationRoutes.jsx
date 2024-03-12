import { Route, Routes } from "react-router-dom";
//import Destination from "./pages/Destination";
import Mars from "./Mars";
import Earth from "./Earth";
import Tytan from "./Tytan";
import DestinationLayout from "./DestinationLayout";

import "../src/data.json";

function DestinationRoutes() {
  return (
    <>
      <DestinationLayout />
      <Routes>
        <Route path="/destination" />
        <Route path="mars" element={<Mars />} />
        <Route path="earth" element={<Earth />} />
        <Route path="tytan" element={<Tytan />} />
      </Routes>
    </>
  );
}

export default DestinationRoutes;

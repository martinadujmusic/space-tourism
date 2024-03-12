import { Route, Routes } from "react-router-dom";
//import Technology from "./pages/Technology";
import LaunchVehicle from "./LaunchVehicle";
import SpaceCapsule from "./SpaceCapsule";
import SpacePort from "./SpacePort";
import TechnologyLayout from "./TechnologyLayout";

function TechnologyRoutes() {
  return (
    <>
      <TechnologyLayout />
      <Routes>
        <Route index element={<LaunchVehicle />} />
        <Route path="launchvehicle" element={<LaunchVehicle />} />
        <Route path="spacecapsule" element={<SpaceCapsule />} />
        <Route path="spaceport" element={<SpacePort />} />
      </Routes>
    </>
  );
}

export default TechnologyRoutes;

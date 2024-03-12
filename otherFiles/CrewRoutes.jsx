import { Route, Routes } from "react-router-dom";
import Mary from "./Mary";
import Mark from "./Mark";
import Jeff from "./Jeff";
import CrewLayout from "./CrewLayout";

function CrewRoutes() {
  return (
    <>
      <CrewLayout />
      <Routes>
        <Route path="/crew" />
        <Route path="jeff" element={<Jeff />} />
        <Route path="mary" element={<Mary />} />
        <Route path="mark" element={<Mark />} />
      </Routes>
    </>
  );
}

export default CrewRoutes;

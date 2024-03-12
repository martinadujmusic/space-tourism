import { Outlet } from "react-router-dom";
import ButtonLink from "../src/utilities/ButtonLink";

function CrewLayout() {
  return (
    <>
      <h4>02 Meet your crew</h4>
      <div>
        <ButtonLink to="/crew/mark" />
        <ButtonLink to="/crew/mary" />
        <ButtonLink to="/crew/jeff" />
      </div>
      <Outlet />
    </>
  );
}

export default CrewLayout;

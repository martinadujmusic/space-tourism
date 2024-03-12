import { Outlet } from "react-router-dom";
import ButtonLink from "../src/utilities/ButtonLink";

function TechnologyLayout() {
  return (
    <>
      <h4>Space launch 101</h4>
      <span>The terminology</span>
      <div>
        <ButtonLink to="/technology/launchvehicle">1</ButtonLink>
        <ButtonLink to="/technology/spacecapsule">2</ButtonLink>
        <ButtonLink to="/technology/spaceport">3</ButtonLink>
      </div>
      <Outlet />
    </>
  );
}

export default TechnologyLayout;

import { Outlet } from "react-router-dom";
import ButtonLink from "../src/utilities/ButtonLink";

function DestinationLayout() {
  return (
    <>
      <h4>Choose your destination</h4>
      <ButtonLink to="/destination/mars">Mars</ButtonLink>
      <ButtonLink to="/destination/earth">Earth</ButtonLink>
      <ButtonLink to="/destination/tytan">Tytan</ButtonLink>
      <Outlet />
    </>
  );
}

export default DestinationLayout;

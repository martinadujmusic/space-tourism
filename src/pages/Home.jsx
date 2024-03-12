import ButtonLink from "../components/ButtonLink";
import "../index.css";

function Home() {
  return (
    <div className="homepage">
      <div className="home-text">
        <span id="heading">So you want to travel to</span>
        <h1>Space</h1>
        <p>
          Let face it: If you want to go to space, you might as well genuinely
          got to outer space and not hover kind of on the edge of it. Well sit
          back, an relax because we will give you a truly out of this world
          experience!
        </p>
        <ButtonLink to="/destination">
          <span>Explore</span>
        </ButtonLink>
      </div>
    </div>
  );
}

export default Home;

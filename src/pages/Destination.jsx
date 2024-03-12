import { useState } from "react";
import "../index.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";

export const Destination = ({ data }) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="container destination">
      <Header>
        <h2 className="subheading">
          <span>01</span> PICK YOUR DESTINATION
        </h2>
      </Header>
      <div className="indicators destination-names">
        {data.map((destination, idx) => {
          return (
            <span
              key={idx}
              className={
                slide === idx
                  ? "indicator active"
                  : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            >
              {destination.name}
            </span>
          );
        })}
      </div>

      {data.map((destination, idx) => {
        return (
          <article
            key={destination.description}
            className={
              slide === idx
                ? "slide destination-container"
                : "slide slide-hidden "
            }
          >
            <img src={destination.images.webp} alt="destination image" />

            <div className="destination-text">
              <Body>
                <h1>{destination.name}</h1>
                <p>{destination.description}</p>
              </Body>

              <Footer>
                <div className="destination-information">
                  <div className="average-distance">
                    <h4>Avg. distance</h4>
                    <span>{destination.distance}</span>
                  </div>

                  <div className="travel-time">
                    <h4>Est.travel time</h4>
                    <span>{destination.travel}</span>
                  </div>
                </div>
              </Footer>
            </div>
          </article>
        );
      })}
    </div>
  );
};
